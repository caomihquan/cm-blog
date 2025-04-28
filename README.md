1. Trang Home: Danh sách bài viết

- Hiển thị bài viết mới nhất

- Có phân trang (pagination) hoặc infinite scroll

Mỗi bài có:

- Ảnh thumbnail

- Title

- Short description

- Tác giả + Ngày viết

👉 Kỹ năng áp dụng:

- getStaticProps

- Dynamic routing

- SEO tối ưu Home page (Next SEO)

2. Trang Chi tiết bài viết

- Hiển thị toàn bộ nội dung bài viết

- Format Markdown đẹp (hoặc CMS đẩy về)

- Có:

- Thẻ tags

- Tác giả

- Bài viết liên quan (related posts)

👉 Kỹ năng áp dụng:

- Dynamic route /post/[slug].js

- getStaticPaths để build từng bài viết

- Markdown parsing (remark hoặc react-markdown)

- Tối ưu SEO cho từng bài (title, description meta tag)

3. Trang Tag

- Ví dụ /tag/nextjs → hiện tất cả bài thuộc thẻ Next.js

- Có bộ lọc bài viết theo Tag

👉 Kỹ năng áp dụng:

- Dynamic route /tag/[tag].js

- URL params

- Filter data theo tag

4. Search bài viết

- Ô search → gõ từ khóa → tìm bài theo tiêu đề hoặc nội dung

👉 Kỹ năng áp dụng:

- Client-side filtering

- Debounce search (tối ưu performance)

5. Dark Mode

- Toggle Dark/Light theme

👉 Kỹ năng áp dụng:

- TailwindCSS Dark Mode

- State Management (Context API hoặc useState)

6. Responsive Design

- Mobile, Tablet, Desktop đều đẹp

👉 Kỹ năng áp dụng:

- TailwindCSS hoặc CSS Modules

- Flex/Grid layout

- Mobile-first design

7. SEO Tối ưu

- Mỗi page đều có title/description riêng

- OpenGraph image (khi share Facebook/Linkedin đẹp)

👉 Kỹ năng áp dụng:

- next/head

- Hoặc dùng thư viện next-seo
