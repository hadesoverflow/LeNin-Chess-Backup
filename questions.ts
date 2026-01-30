import type { Question } from './types';

export const QUESTIONS: Question[] = [
  // TILE 1: Bến Khởi Hành
  {
    "type": "singlechoice",
    "content": "1. Theo CNXHKH, yếu tố nào là \"tâm hồn\", là sợi dây gắn kết bền chặt nhất giữa các thành viên dân tộc?",
    "answers": [
      { "content": "Lãnh thổ", "correct": false },
      { "content": "Kinh tế", "correct": false },
      { "content": "Văn hóa", "correct": true },
      { "content": "Ngôn ngữ", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì văn hóa được xem là “tâm hồn” của dân tộc, tạo nên hệ giá trị, bản sắc và sự gắn kết bền chặt giữa các thành viên."
  },
  {
    "type": "singlechoice",
    "content": "2. Hai xu hướng khách quan của sự phát triển dân tộc là gì?",
    "answers": [
      { "content": "Hòa nhập và Đồng hóa", "correct": false },
      { "content": "Tách ra và Cô lập", "correct": false },
      { "content": "Tách ra thành dân tộc độc lập và Liên hiệp dân tộc", "correct": true },
      { "content": "Phát triển kinh tế và Bảo tồn truyền thống", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì lý luận CNXHKH chỉ ra 2 xu hướng khách quan: (1) tách ra hình thành dân tộc độc lập và (2) liên hiệp các dân tộc trong quá trình phát triển."
  },
  {
    "type": "singlechoice",
    "content": "3. Khát vọng giữ gìn bản sắc riêng, không muốn bị trộn lẫn là biểu hiện của xu hướng nào?",
    "answers": [
      { "content": "Xu hướng thứ hai", "correct": false },
      { "content": "Xu hướng thứ nhất", "correct": true },
      { "content": "Xu hướng toàn cầu hóa", "correct": false },
      { "content": "Xu hướng hiện đại hóa", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì mong muốn giữ bản sắc, tách ra để khẳng định sự tồn tại độc lập là biểu hiện của xu hướng thứ nhất."
  },
  {
    "type": "singlechoice",
    "content": "4. Ai là người đưa ra Cương lĩnh dân tộc với 3 nội dung: Bình đẳng, Tự quyết và Liên hiệp công nhân?",
    "answers": [
      { "content": "C.Mác", "correct": false },
      { "content": "Ph.Ăng-ghen", "correct": false },
      { "content": "V.I.Lênin", "correct": true },
      { "content": "Hồ Chí Minh", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì V.I. Lênin đề ra Cương lĩnh dân tộc với các nội dung: bình đẳng dân tộc, quyền tự quyết và liên hiệp công nhân các dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "5. Quyền tự quyết dân tộc bao gồm quyền gì?",
    "answers": [
      { "content": "Tự nguyện tách ra", "correct": false },
      { "content": "Tự nguyện liên hiệp", "correct": false },
      { "content": "Cả A và B đều đúng", "correct": true },
      { "content": "Chỉ có quyền liên hiệp", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì quyền tự quyết gồm cả quyền tự nguyện tách ra và quyền tự nguyện liên hiệp."
  },
  {
    "type": "singlechoice",
    "content": "6. Sự bình đẳng giữa các dân tộc phải được thực hiện trên lĩnh vực nào?",
    "answers": [
      { "content": "Chính trị, Kinh tế", "correct": false },
      { "content": "Văn hóa, Giáo dục", "correct": false },
      { "content": "Tư tưởng", "correct": false },
      { "content": "Tất cả các lĩnh vực", "correct": true }
    ],
    "explanation": "Đáp án đúng là D vì bình đẳng dân tộc phải được bảo đảm toàn diện trên mọi lĩnh vực: chính trị, kinh tế, văn hóa, xã hội…"
  },
  {
    "type": "singlechoice",
    "content": "7. Điền vào chỗ trống: \"Văn hóa là ... của dân tộc\".",
    "answers": [
      { "content": "Thân xác", "correct": false },
      { "content": "Mạch máu", "correct": false },
      { "content": "Căn cước (Bản sắc)", "correct": true },
      { "content": "Công cụ", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì văn hóa tạo nên căn cước/bản sắc, giúp phân biệt và khẳng định sự tồn tại của một dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "8. Trong thời kỳ quá độ lên CNXH, vấn đề dân tộc có vị trí như thế nào?",
    "answers": [
      { "content": "Chiến lược, lâu dài", "correct": true },
      { "content": "Tạm thời", "correct": false },
      { "content": "Chỉ quan trọng ở biên giới", "correct": false },
      { "content": "Thứ yếu", "correct": false }
    ],
    "explanation": "Đáp án đúng là A vì vấn đề dân tộc trong thời kỳ quá độ là vấn đề chiến lược, lâu dài, gắn với ổn định và phát triển bền vững."
  },
  {
    "type": "singlechoice",
    "content": "9. Mối quan hệ giữa dân tộc và văn hóa là gì?",
    "answers": [
      { "content": "Tách rời", "correct": false },
      { "content": "Biện chứng, gắn bó", "correct": true },
      { "content": "Văn hóa quyết định lãnh thổ", "correct": false },
      { "content": "Dân tộc là hình thức của văn hóa", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì dân tộc và văn hóa có quan hệ biện chứng, gắn bó: văn hóa là hồn cốt dân tộc, dân tộc là chủ thể sáng tạo và bảo lưu văn hóa."
  },
  {
    "type": "singlechoice",
    "content": "10. Tại sao nói văn hóa là sức mạnh nội sinh?",
    "answers": [
      { "content": "Tạo ra tiền trực tiếp", "correct": false },
      { "content": "Tạo động lực tinh thần và niềm tin", "correct": true },
      { "content": "Giúp dân tộc tách biệt thế giới", "correct": false },
      { "content": "Vì nó bất biến", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì văn hóa tạo động lực tinh thần, niềm tin, bản lĩnh và sức đề kháng xã hội, từ đó trở thành nguồn lực nội sinh cho phát triển."
  },
  {
    "type": "singlechoice",
    "content": "11. \"Thống nhất trong đa dạng\" có nghĩa là gì?",
    "answers": [
      { "content": "Mọi dân tộc phải giống hệt nhau", "correct": false },
      { "content": "Nhiều bản sắc riêng nhưng chung một quốc gia thống nhất", "correct": true },
      { "content": "Xóa bỏ bản sắc riêng", "correct": false },
      { "content": "Chỉ ưu tiên văn hóa đa số", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì Việt Nam thống nhất trên nền tảng quốc gia chung nhưng tôn trọng sự đa dạng bản sắc của các dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "12. Vấn đề dân tộc ở Việt Nam thực chất là gì trong giai đoạn hiện nay?",
    "answers": [
      { "content": "Chỉ là xóa đói giảm nghèo", "correct": false },
      { "content": "Vấn đề chính trị - xã hội rộng lớn và toàn diện", "correct": true },
      { "content": "Vấn đề của riêng miền núi", "correct": false },
      { "content": "Vấn đề tôn giáo", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì vấn đề dân tộc gắn với phát triển kinh tế-xã hội, bình đẳng, đoàn kết, an ninh và văn hóa, mang tính toàn diện."
  },
  {
    "type": "singlechoice",
    "content": "13. Xu hướng \"Liên hiệp các dân tộc\" trong thời đại ngày nay biểu hiện rõ nhất qua điều gì?",
    "answers": [
      { "content": "Sự chia cắt lãnh thổ", "correct": false },
      { "content": "Sự hội nhập kinh tế, văn hóa quốc tế", "correct": true },
      { "content": "Sự đóng cửa biên giới", "correct": false },
      { "content": "Sự đồng hóa văn hóa", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì xu hướng liên hiệp thể hiện rõ qua hội nhập và hợp tác quốc tế trên các lĩnh vực kinh tế, văn hóa, khoa học..."
  },
  {
    "type": "singlechoice",
    "content": "14. Cương lĩnh dân tộc của Lênin coi trọng quyền nào nhất để đảm bảo tính nhân văn?",
    "answers": [
      { "content": "Quyền khai thác tài nguyên", "correct": false },
      { "content": "Quyền bình đẳng và tự quyết", "correct": true },
      { "content": "Quyền xâm lược", "correct": false },
      { "content": "Quyền ưu tiên dân tộc lớn", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì bình đẳng dân tộc và quyền tự quyết là nền tảng nhân văn, chống áp bức, kỳ thị và bảo đảm quyền của các dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "15. Đặc điểm nào là \"mạch máu\" gắn kết các dân tộc Việt Nam qua lịch sử?",
    "answers": [
      { "content": "Kinh tế giàu có", "correct": false },
      { "content": "Truyền thống đoàn kết chống ngoại xâm và thiên tai", "correct": true },
      { "content": "Chung một ngôn ngữ nói", "correct": false },
      { "content": "Chung một tôn giáo", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì truyền thống đoàn kết trong dựng nước và giữ nước, cùng vượt qua thiên tai, ngoại xâm là sợi dây gắn kết bền chặt các dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "16. Việt Nam có bao nhiêu dân tộc cùng sinh sống?",
    "answers": [
      { "content": "50", "correct": false },
      { "content": "54", "correct": true },
      { "content": "64", "correct": false },
      { "content": "45", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì Việt Nam có 54 dân tộc anh em cùng sinh sống."
  },
  {
    "type": "singlechoice",
    "content": "17. Đặc điểm nổi bật nhất của cư trú dân tộc tại Việt Nam là gì?",
    "answers": [
      { "content": "Cư trú tập trung vùng riêng", "correct": false },
      { "content": "Cư trú xen kẽ", "correct": true },
      { "content": "Chỉ ở miền núi", "correct": false },
      { "content": "Chỉ ở đồng bằng", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì các dân tộc ở Việt Nam có đặc điểm cư trú xen kẽ, đan xen giữa nhiều vùng địa lý."
  },
  {
    "type": "singlechoice",
    "content": "18. Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO công nhận là gì?",
    "answers": [
      { "content": "Di sản vật thể", "correct": false },
      { "content": "Kiệt tác truyền khẩu và phi vật thể", "correct": true },
      { "content": "Di sản thiên nhiên", "correct": false },
      { "content": "Kỳ quan thế giới", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì Không gian văn hóa Cồng chiêng Tây Nguyên được ghi danh là di sản văn hóa phi vật thể (kiệt tác truyền khẩu và phi vật thể)."
  },
  {
    "type": "singlechoice",
    "content": "19. Điệu múa \"Xòe Thái\" là di sản tiêu biểu của vùng nào?",
    "answers": [
      { "content": "Miền núi phía Bắc", "correct": true },
      { "content": "Tây Nguyên", "correct": false },
      { "content": "Miền Trung", "correct": false },
      { "content": "Miền Tây", "correct": false }
    ],
    "explanation": "Đáp án đúng là A vì Xòe Thái là di sản đặc trưng của cộng đồng người Thái ở vùng Tây Bắc (miền núi phía Bắc)."
  },
  {
    "type": "singlechoice",
    "content": "20. Lễ hội Ok Om Bok (Cúng Trăng) là của dân tộc nào?",
    "answers": [
      { "content": "Tày", "correct": false },
      { "content": "Mông", "correct": false },
      { "content": "Khmer", "correct": true },
      { "content": "Chăm", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì Ok Om Bok (Cúng Trăng) là lễ hội truyền thống của đồng bào Khmer Nam Bộ."
  },
  {
    "type": "singlechoice",
    "content": "21. Lễ hội Ka-tê của người Chăm thường tổ chức ở đâu?",
    "answers": [
      { "content": "Nhà rông", "correct": false },
      { "content": "Tháp Chàm", "correct": true },
      { "content": "Đình làng", "correct": false },
      { "content": "Chùa Khmer", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì lễ hội Ka-tê của người Chăm gắn với các cụm tháp Chàm, nơi diễn ra nghi lễ truyền thống."
  },
  {
    "type": "singlechoice",
    "content": "22. Thách thức lớn nhất đối với văn hóa DTTS trong hội nhập là gì?",
    "answers": [
      { "content": "Thiếu kinh phí", "correct": false },
      { "content": "Già hóa dân số", "correct": false },
      { "content": "Nguy cơ bị \"hòa tan\", mất bản sắc", "correct": true },
      { "content": "Không có người xem", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì hội nhập dễ dẫn tới tiếp biến thiếu chọn lọc, làm phai nhạt hoặc mất bản sắc văn hóa DTTS."
  },
  {
    "type": "singlechoice",
    "content": "23. Tác động của mạng xã hội đến giới trẻ DTTS là?",
    "answers": [
      { "content": "Chỉ tốt", "correct": false },
      { "content": "Không có tác động", "correct": false },
      { "content": "Vừa tạo cơ hội tiếp cận tri thức, vừa gây nguy cơ đứt gãy truyền thống", "correct": true },
      { "content": "Xấu hoàn toàn", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì mạng xã hội mở rộng tri thức và kết nối, nhưng cũng có thể làm thay đổi thói quen, ngôn ngữ và giá trị truyền thống nếu thiếu định hướng."
  },
  {
    "type": "singlechoice",
    "content": "24. Tại sao các DTTS thường phân bố ở vị trí chiến lược?",
    "answers": [
      { "content": "Thích sống cao", "correct": false },
      { "content": "Gắn với biên giới, rừng phòng hộ và an ninh", "correct": true },
      { "content": "Đất màu mỡ", "correct": false },
      { "content": "Bị bắt buộc", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì nhiều vùng DTTS nằm ở khu vực biên giới, rừng đầu nguồn, có ý nghĩa đặc biệt về quốc phòng – an ninh và sinh thái."
  },
  {
    "type": "singlechoice",
    "content": "25. Ý nghĩa bảo tồn thổ cẩm là gì?",
    "answers": [
      { "content": "Có quần áo", "correct": false },
      { "content": "Biểu diễn văn nghệ", "correct": false },
      { "content": "Giữ kỹ thuật thủ công và tâm hồn dân tộc qua hoa văn", "correct": true },
      { "content": "Thay thế áo phông", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì thổ cẩm lưu giữ kỹ thuật thủ công, biểu tượng và hoa văn truyền thống – một phần “ký ức” và bản sắc của cộng đồng."
  },
  {
    "type": "singlechoice",
    "content": "26. Việc thay thế tiếng chiêng bằng loa kẹo kéo là biểu hiện của điều gì?",
    "answers": [
      { "content": "Sự tiến bộ tuyệt đối", "correct": false },
      { "content": "Sự xâm lăng của văn hóa đại chúng thiếu chọn lọc", "correct": true },
      { "content": "Sự giàu có của dân làng", "correct": false },
      { "content": "Sự hội nhập thành công", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì thay thế nhạc cụ/không gian diễn xướng truyền thống bằng phương tiện đại chúng có thể làm sai lệch giá trị gốc nếu thiếu chọn lọc."
  },
  {
    "type": "singlechoice",
    "content": "27. Các dân tộc Việt Nam có trình độ phát triển như thế nào?",
    "answers": [
      { "content": "Hoàn toàn bằng nhau", "correct": false },
      { "content": "Không đồng đều", "correct": true },
      { "content": "Miền núi phát triển hơn", "correct": false },
      { "content": "Chỉ dân tộc Kinh mới phát triển", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì do điều kiện tự nhiên, lịch sử, địa bàn cư trú… nên trình độ phát triển giữa các dân tộc có sự chênh lệch."
  },
  {
    "type": "singlechoice",
    "content": "28. Văn hóa DTTS thường bị tổn thương nhất bởi lý do gì?",
    "answers": [
      { "content": "Vì nó quá cũ", "correct": false },
      { "content": "Vì cộng đồng dân số ít và điều kiện kinh tế khó khăn", "correct": true },
      { "content": "Vì không ai quan tâm", "correct": false },
      { "content": "Vì thiên tai", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì quy mô cộng đồng nhỏ và điều kiện kinh tế hạn chế khiến khả năng truyền dạy, duy trì thực hành văn hóa dễ bị suy giảm."
  },
  {
    "type": "singlechoice",
    "content": "29. Bảo tồn văn hóa \"động\" là gì?",
    "answers": [
      { "content": "Để trong bảo tàng", "correct": false },
      { "content": "Để văn hóa sống và phát triển trong đời sống hiện đại", "correct": true },
      { "content": "Ghi hình lại rồi thôi", "correct": false },
      { "content": "Cấm thay đổi", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì bảo tồn “động” là bảo tồn gắn với đời sống, để văn hóa tiếp tục được thực hành, thích ứng và phát triển."
  },
  {
    "type": "singlechoice",
    "content": "30. Tôn trọng một tiếng chiêng cũng chính là tôn trọng điều gì?",
    "answers": [
      { "content": "Nhạc cụ", "correct": false },
      { "content": "Nhân phẩm của một dân tộc", "correct": true },
      { "content": "Kỹ thuật đúc đồng", "correct": false },
      { "content": "Người gõ chiêng", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì tiếng chiêng gắn với đời sống tinh thần, tín ngưỡng và căn cước; tôn trọng nó là tôn trọng giá trị và phẩm giá văn hóa của cộng đồng."
  },
  {
    "type": "singlechoice",
    "content": "31. Quan điểm của Đảng về văn hóa Việt Nam hiện nay là gì?",
    "answers": [
      { "content": "Hòa nhập toàn bộ", "correct": false },
      { "content": "Tiên tiến, đậm đà bản sắc dân tộc", "correct": true },
      { "content": "Giữ nguyên cổ xưa", "correct": false },
      { "content": "Chỉ tập trung văn hóa Kinh", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì quan điểm xuyên suốt là xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, vừa phát triển vừa giữ căn cốt."
  },
  {
    "type": "singlechoice",
    "content": "32. Phương châm của Việt Nam trong hội nhập văn hóa là?",
    "answers": [
      { "content": "Hòa nhập và hòa tan", "correct": false },
      { "content": "Hòa nhập nhưng không hòa tan", "correct": true },
      { "content": "Đóng cửa", "correct": false },
      { "content": "Tiếp thu toàn bộ phương Tây", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì hội nhập cần chọn lọc, tiếp thu tinh hoa nhưng vẫn giữ vững bản sắc và hệ giá trị văn hóa dân tộc."
  },
  {
    "type": "singlechoice",
    "content": "33. Hội nghị Văn hóa toàn quốc 2021 nhấn mạnh điều gì?",
    "answers": [
      { "content": "Văn hóa là hàng hóa", "correct": false },
      { "content": "Văn hóa soi đường cho quốc dân đi", "correct": true },
      { "content": "Văn hóa là giải trí", "correct": false },
      { "content": "Văn hóa là chi phí", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì thông điệp cốt lõi nhấn mạnh vai trò định hướng của văn hóa đối với sự phát triển đất nước và con người."
  },
  {
    "type": "singlechoice",
    "content": "34. Chương trình mục tiêu quốc gia nào hỗ trợ vùng DTTS mạnh nhất hiện nay?",
    "answers": [
      { "content": "Xóa mù chữ", "correct": false },
      { "content": "Chương trình 1719", "correct": true },
      { "content": "Trồng cây", "correct": false },
      { "content": "Xuất khẩu lao động", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì Chương trình MTQG 1719 tập trung phát triển KT-XH vùng đồng bào DTTS và miền núi, gắn với bảo tồn và phát huy giá trị văn hóa."
  },
  {
    "type": "singlechoice",
    "content": "35. Mục tiêu bảo tồn đến 2030 của Chính phủ là?",
    "answers": [
      { "content": "Thành bảo tàng", "correct": false },
      { "content": "Di sản được kế thừa và phát huy giá trị đời sống mới", "correct": true },
      { "content": "Cấm dùng điện thoại", "correct": false },
      { "content": "Đóng cửa lễ hội", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì mục tiêu bảo tồn hướng tới kế thừa và phát huy, đưa di sản “sống” trong bối cảnh mới chứ không chỉ trưng bày."
  },
  {
    "type": "singlechoice",
    "content": "36. Trách nhiệm sinh viên trong bảo tồn văn hóa là?",
    "answers": [
      { "content": "Chỉ học chuyên môn", "correct": false },
      { "content": "Đi du lịch", "correct": false },
      { "content": "Tôn trọng, tìm hiểu và quảng bá bản sắc", "correct": true },
      { "content": "Phê phán người khác", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì sinh viên có thể góp phần bằng thái độ tôn trọng, chủ động tìm hiểu, lan tỏa và tham gia hoạt động bảo tồn văn hóa."
  },
  {
    "type": "singlechoice",
    "content": "37. Phát triển \"Du lịch cộng đồng\" giúp ích gì?",
    "answers": [
      { "content": "Làm hỏng cảnh quan", "correct": false },
      { "content": "Người dân có thu nhập từ chính văn hóa (bền vững)", "correct": true },
      { "content": "Quên làm nông", "correct": false },
      { "content": "Chỉ cho người nước ngoài", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì du lịch cộng đồng tạo sinh kế dựa trên văn hóa bản địa, giúp người dân có động lực bảo tồn và phát huy giá trị truyền thống."
  },
  {
    "type": "singlechoice",
    "content": "38. Đảng xác định sức mạnh đoàn kết dân tộc là?",
    "answers": [
      { "content": "Sức mạnh kinh tế", "correct": false },
      { "content": "Quân sự", "correct": false },
      { "content": "Động lực chủ yếu và nhân tố quyết định thắng lợi", "correct": true },
      { "content": "Ngoại giao", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì sức mạnh đại đoàn kết toàn dân tộc được xác định là động lực chủ yếu, nhân tố quyết định mọi thắng lợi của cách mạng."
  },
  {
    "type": "singlechoice",
    "content": "39. \"Điểm mới\" trong tư duy của Đảng về văn hóa là gì?",
    "answers": [
      { "content": "Coi văn hóa là chi phí", "correct": false },
      { "content": "Coi văn hóa là nguồn lực nội sinh, \"sức mạnh mềm\"", "correct": true },
      { "content": "Chỉ bảo tồn vật thể", "correct": false },
      { "content": "Ưu tiên hiện đại", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì tư duy mới nhấn mạnh văn hóa là nguồn lực nội sinh, tạo “sức mạnh mềm” và năng lực cạnh tranh quốc gia."
  },
  {
    "type": "singlechoice",
    "content": "40. Chủ thể quan trọng nhất để bảo tồn văn hóa thành công là?",
    "answers": [
      { "content": "Chuyên gia", "correct": false },
      { "content": "Khách du lịch", "correct": false },
      { "content": "Chính cộng đồng người DTTS đó", "correct": true },
      { "content": "Công ty lữ hành", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì cộng đồng là chủ thể sáng tạo, thực hành và truyền dạy; bảo tồn bền vững phải dựa vào người trong cuộc."
  },
  {
    "type": "singlechoice",
    "content": "41. Theo Kết luận 84-KL/TW (2024), đầu tư cho văn hóa vùng DTTS cần tránh điều gì?",
    "answers": [
      { "content": "Đầu tư quá nhiều", "correct": false },
      { "content": "Đầu tư dàn trải, thiếu trọng tâm", "correct": true },
      { "content": "Đầu tư vào con người", "correct": false },
      { "content": "Đầu tư vào truyền thông", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì đầu tư văn hóa cần tập trung, có trọng tâm trọng điểm để hiệu quả, tránh dàn trải gây lãng phí và thiếu bền vững."
  },
  {
    "type": "singlechoice",
    "content": "42. Việc số hóa các di sản văn hóa (3D hóa tháp Chàm, Cồng chiêng) là biểu hiện của?",
    "answers": [
      { "content": "Sự xâm lăng công nghệ", "correct": false },
      { "content": "Tận dụng Cách mạng 4.0 để bảo tồn", "correct": true },
      { "content": "Làm mất đi tính linh thiêng", "correct": false },
      { "content": "Tốn kém lãng phí", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì số hóa giúp lưu trữ, phục dựng, quảng bá và giáo dục di sản, tận dụng công nghệ để bảo tồn và phát huy giá trị."
  },
  {
    "type": "singlechoice",
    "content": "43. Tại sao bảo tồn văn hóa lại giúp đảm bảo \"An ninh văn hóa\"?",
    "answers": [
      { "content": "Vì văn hóa là vũ khí", "correct": false },
      { "content": "Giúp củng cố khối đoàn kết, chống lại các âm mưu chia rẽ", "correct": true },
      { "content": "Để đóng cửa biên giới", "correct": false },
      { "content": "Để ngăn chặn du khách", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì văn hóa tạo nền tảng đoàn kết, củng cố bản lĩnh và sức đề kháng xã hội, góp phần ngăn chặn âm mưu chia rẽ, phá hoại."
  },
  {
    "type": "singlechoice",
    "content": "44. \"Hòa nhập\" mang lại sự tiện nghi, nhưng \"Hòa tan\" sẽ mang lại điều gì?",
    "answers": [
      { "content": "Sự giàu có", "correct": false },
      { "content": "Sự đứt gãy lịch sử và mất căn cước dân tộc", "correct": true },
      { "content": "Sự văn minh", "correct": false },
      { "content": "Sự tự do", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì “hòa tan” làm phai nhạt bản sắc, đứt gãy truyền thống và dẫn tới mất căn cước văn hóa của cộng đồng."
  },
  {
    "type": "singlechoice",
    "content": "45. Chính sách ưu tiên đào tạo văn nghệ sĩ người DTTS nhằm mục đích gì?",
    "answers": [
      { "content": "Để họ đi diễn lấy tiền", "correct": false },
      { "content": "Để tạo ra lớp người kế cận bảo tồn văn hóa từ bên trong", "correct": true },
      { "content": "Để đủ chỉ tiêu", "correct": false },
      { "content": "Để thay thế nghệ sĩ Kinh", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì đào tạo nghệ sĩ DTTS giúp hình thành lực lượng kế cận am hiểu bản sắc, gìn giữ và lan tỏa văn hóa từ chính cộng đồng."
  },
  {
    "type": "singlechoice",
    "content": "46. Công nghiệp văn hóa phấn đấu đóng góp bao nhiêu % GDP vào năm 2030?",
    "answers": [
      { "content": "3%", "correct": false },
      { "content": "5%", "correct": false },
      { "content": "7%", "correct": true },
      { "content": "10%", "correct": false }
    ],
    "explanation": "Đáp án đúng là C vì mục tiêu đến 2030 công nghiệp văn hóa phấn đấu đóng góp khoảng 7% GDP."
  },
  {
    "type": "singlechoice",
    "content": "47. Việc phục dựng không gian lễ hội truyền thống thuộc dự án nào của Chương trình 1719?",
    "answers": [
      { "content": "Dự án 1", "correct": false },
      { "content": "Dự án 6", "correct": true },
      { "content": "Dự án 8", "correct": false },
      { "content": "Dự án 10", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì nội dung phục dựng, bảo tồn và phát huy giá trị văn hóa truyền thống thuộc Dự án 6 của Chương trình 1719."
  },
  {
    "type": "singlechoice",
    "content": "48. Tại sao phải bảo tồn \"khẩn cấp\" văn hóa các dân tộc rất ít người (dưới 10.000 dân)?",
    "answers": [
      { "content": "Vì họ giàu", "correct": false },
      { "content": "Vì văn hóa của họ có nguy cơ biến mất hoàn toàn", "correct": true },
      { "content": "Vì họ không biết tiếng Kinh", "correct": false },
      { "content": "Vì họ ở quá xa", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì quy mô cộng đồng nhỏ khiến ngôn ngữ, tri thức dân gian và thực hành văn hóa có nguy cơ mai một nhanh, cần bảo tồn khẩn cấp."
  },
  {
    "type": "singlechoice",
    "content": "49. Khi một sinh viên mặc áo thổ cẩm lên thuyết trình, đó là hành động gì?",
    "answers": [
      { "content": "Làm màu", "correct": false },
      { "content": "Thực hành và quảng bá văn hóa dân tộc", "correct": true },
      { "content": "Vi phạm đồng phục", "correct": false },
      { "content": "Tiết kiệm tiền mua áo", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì đó là hành động thể hiện sự trân trọng, thực hành và lan tỏa giá trị văn hóa thổ cẩm trong môi trường hiện đại."
  },
  {
    "type": "singlechoice",
    "content": "50. Thông điệp cuối cùng của bài thuyết trình về bảo tồn văn hóa DTTS là gì?",
    "answers": [
      { "content": "Văn hóa là của quá khứ", "correct": false },
      { "content": "Văn hóa còn thì dân tộc còn", "correct": true },
      { "content": "Hội nhập là bỏ qua truyền thống", "correct": false },
      { "content": "Chỉ Nhà nước mới bảo tồn được", "correct": false }
    ],
    "explanation": "Đáp án đúng là B vì thông điệp cốt lõi nhấn mạnh: giữ gìn văn hóa là giữ căn cước và sức sống của dân tộc; mất văn hóa sẽ dẫn tới suy yếu bản sắc."
  }
]

