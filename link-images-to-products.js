// link-images-to-products.js
import { createClient } from '@supabase/supabase-js'

// ⚠️ عدّل دول حسب مشروعك
const SUPABASE_URL = 'https://novqojzbfpuijvrmvypk.supabase.co'
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdnFvanpiZnB1aWp2cm12eXBrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTY1OTc1NywiZXhwIjoyMTA1MjM1NzU3fQ.9l-jQbePCdoQLxuRC6IYSXMPRqmu-s7_ev2JUez5vwA'   // مش anon key - لازم service role عشان الـ update يشتغل
const BUCKET_NAME = 'products-images'
const TABLE_NAME = 'products'
const SKU_COLUMN = 'sku'
const IMAGE_COLUMN = 'image_path'

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

async function linkImages() {
  // 1) هات كل الملفات اللي في الباكيت
  const { data: files, error: listError } = await supabase
    .storage
    .from(BUCKET_NAME)
    .list('', { limit: 2000 })

  if (listError) {
    console.error('خطأ في قراءة الباكيت:', listError.message)
    return
  }

  console.log(`لقيت ${files.length} ملف في الباكيت`)

  const matched = []
  const unmatchedFiles = []

  for (const file of files) {
    // اسم الملف من غير الامتداد = SKU
    const sku = file.name.replace(/\.[^/.]+$/, '')

    // اجيب رابط عام للصورة
    const { data: publicUrlData } = supabase
      .storage
      .from(BUCKET_NAME)
      .getPublicUrl(file.name)

    const publicUrl = publicUrlData.publicUrl

    // دوّر على المنتج اللي ليه نفس الـ SKU وحدّث الصورة
    const { data: updated, error: updateError } = await supabase
      .from(TABLE_NAME)
      .update({ [IMAGE_COLUMN]: publicUrl })
      .eq(SKU_COLUMN, sku)
      .select()

    if (updateError) {
      console.error(`خطأ وقت تحديث ${sku}:`, updateError.message)
      continue
    }

    if (updated && updated.length > 0) {
      matched.push(sku)
    } else {
      unmatchedFiles.push(file.name)
    }
  }

  console.log(`\n✅ اتربط بنجاح: ${matched.length} منتج`)
  console.log(`⚠️ ملفات مالهاش منتج مطابق (SKU مش موجود في الجدول): ${unmatchedFiles.length}`)
  if (unmatchedFiles.length) console.log(unmatchedFiles)
}

linkImages()