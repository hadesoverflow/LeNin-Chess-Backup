import type { TileData, Card, CardType } from './types';

export const PLAYER_COLORS = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899'];
export const PLAYER_STARTING_KP = 1500;
export const PLAYER_ELIMINATION_THRESHOLD = -2000;

export const CHARACTERS_LIST = [
  { name: "Dinosaur", img: "characters/Dinosaur.png" },
  { name: "Zenmarx", img: "characters/Zenmarx.png" },
  { name: "Comrad Bunny", img: "characters/ComradBunny.png" },
  { name: "Marxwell", img: "characters/Marxwell.png" },
];

export const CARDS_INFO: { [key in CardType]: Omit<Card, 'id'> & { icon: string } } = {
  'x2_points': {
    type: 'x2_points',
    name: 'Thẻ Cảm Hứng Sáng Tạo',
    description: 'Nhân đôi số KP nhận được từ một lần thưởng hoặc trả lời đúng câu hỏi (dùng 1 lần).',
    icon: '🌠'
  },
  'shield': {
    type: 'shield',
    name: 'Lá Chắn Biện Chứng',
    description: 'Vô hiệu hóa một lần tấn công "Phê Bình Trực Diện" từ người chơi khác (dùng 1 lần).',
    icon: '🛡️'
  },
  'point_save': {
    type: 'point_save',
    name: 'Luận Điểm Vững Chắc',
    description: 'Tránh bị trừ KP khi trả lời sai một câu hỏi (dùng 1 lần).',
    icon: '📚'
  }
};

export const CARD_COSTS: { [key in CardType]: number } = {
  'x2_points': 150,
  'shield': 250,
  'point_save': 150
};


export const TILES: TileData[] = [
  // Cạnh dưới
  { id: 1, name: "Khởi Động Hành Trình Di Sản 🚩", group: "Đặc Biệt", type: 'start', description: "Bắt đầu hành trình bảo tồn. Bạn được nhận 200 KP để đầu tư cho các dự án văn hóa." },
  { id: 2, name: "Lễ Hội Cồng Chiêng 🥁", group: "Thưởng", type: 'reward', description: "Tham gia lễ hội văn hóa đặc sắc. Bạn được cộng điểm uy tín hoặc KP thưởng." },
  { id: 3, name: "Mai Một Ngôn Ngữ 📉", group: "Phạt", type: 'penalty', description: "Ngôn ngữ truyền thống đang dần mất đi. Bạn bị trừ KP do chưa nỗ lực bảo tồn.." },
  { id: 4, name: "Trung Tâm Bảo Tồn 🏛️", group: "Mua Thẻ", type: 'buy_card', description: "Ghé thăm trung tâm lưu giữ di sản. Trả lời đúng để mua vật phẩm hỗ trợ." },
  { id: 5, name: "Phục Dựng Lễ Hội ✨", group: "Thưởng", type: 'reward', description: "Một lễ hội cổ truyền được phục dựng thành công. Nhận phần thưởng xứng đáng." },
  { id: 6, name: "Giao Lưu Văn Hóa 🤝", group: "Cơ Hội", type: 'opportunity', description: "Học hỏi từ các dân tộc anh em. Chọn một người để 'kết nối' cho lượt tiếp theo của họ!" },
  { id: 7, name: "Xâm Hại Di Sản ⚔️", group: "Tấn Công", type: 'attack', description: "Lên án hành động xâm hại di sản. Chọn một người chơi để họ phải lùi lại 5 ô hối lỗi." },
  { id: 8, name: "Thương Mại Hóa Quá Mức 🧱", group: "Phạt", type: 'penalty', description: "Biến di sản thành hàng hóa thô thiển. Bạn bị phạt KP hoặc lùi bước để chấn chỉnh." },
  { id: 9, name: "Đầu Tư Du Lịch Cộng Đồng 🏡", group: "Đầu Tư", type: 'investment', description: "Phát triển du lịch bền vững. Đặt cược KP, đúng nhân đôi lợi nhuận, sai mất vốn." },
  { id: 10, name: "Truyền Dạy Nghề Thủ Công 🧵", group: "Thưởng", type: 'reward', description: "Nghệ nhân truyền nghề cho thế hệ trẻ. Nhận thưởng KP hoặc tiến thêm." },

  // Cạnh trái
  { id: 11, name: "Kiểm Kê Di Sản (Đợt 1) 📝", group: "Đặc Biệt", type: 'midterm_exam', description: "Đánh giá công tác bảo tồn. Trả lời 10 câu, đúng >=7 nhận 300 KP, sai bị phạt 200 KP." },
  { id: 12, name: "Quảng Bá Di Sản 📺", group: "Đầu Tư", type: 'investment', description: "Đầu tư chiến dịch quảng bá văn hóa. Đặt cược KP, thành công vang dội (x2) hoặc thất bại (mất)." },
  { id: 13, name: "Lãng Quên Phong Tục 🌪️", group: "Phạt", type: 'penalty', description: "Một phong tục đẹp bị lãng quên. Bạn mất KP hoặc phải lùi lại tìm về nguồn cội." },
  { id: 14, name: "Khám Phá Bản Sắc 🔍", group: "Thưởng", type: 'reward', description: "Tìm thấy nét đẹp văn hóa tiềm ẩn. Phần thưởng là KP hoặc bước tiến mới." },
  { id: 15, name: "Bảo Tàng Dân Tộc Học 🏺", group: "Mua Thẻ", type: 'buy_card', description: "Nơi lưu giữ ký ức văn hóa. Trả lời đúng để có cơ hội mua thẻ bảo vệ." },
  { id: 16, name: "Hợp Tác Quốc Tế 🌐", group: "Cơ Hội", type: 'opportunity', description: "Quốc tế hỗ trợ bảo tồn. Chọn một người chơi để cùng chia sẻ cơ hội hoặc rủi ro." },
  { id: 17, name: "Sáng Tạo Trên Nền Tảng Cũ 🎨", group: "Thưởng", type: 'reward', description: "Kết hợp truyền thống và hiện đại. Nhận phần thưởng KP hoặc tiến về phía trước." },
  { id: 18, name: "Quỹ Hỗ Trợ Nghệ Nhân 💰", group: "Quỹ Tri Thức", type: 'knowledge_fund', description: "Nhận tài trợ để hỗ trợ nghệ nhân. Nhận buff loại bỏ đáp án sai trong 2 lượt tới." },
  { id: 19, name: "Mất Gốc Văn Hóa 📉", group: "Phạt", type: 'penalty', description: "Sống tách biệt với cội nguồn. Cảnh báo mất KP hoặc phải lùi bước." },
  { id: 20, name: "Vinh Danh Nghệ Nhân Ưu Tú 🎖️", group: "Thưởng", type: 'reward', description: "Tôn vinh những người giữ lửa. Nhận thưởng KP." },

  // Cạnh trên
  { id: 21, name: "Đại Hội Bảo Tồn Di Sản 📄", group: "Đặc Biệt", type: 'final_exam', description: "Kỳ sát hạch kiến thức văn hóa toàn diện. Trả lời 15 câu, đúng >=7 nhận 500 KP, sai phạt 300 KP." },
  { id: 22, name: "Đồng Hóa Văn Hóa 🧊", group: "Phạt", type: 'penalty', description: "Bị hòa tan trong hội nhập. Mất bản sắc riêng, bị trừ KP hoặc lùi lại." },
  { id: 23, name: "Liên Kết Vùng Miền 🔗", group: "Cơ Hội", type: 'opportunity', description: "Các dân tộc đoàn kết cùng phát triển. Chọn một người bạn đồng hành cho lượt tới." },
  { id: 24, name: "Tranh Chấp Bản Quyền 💥", group: "Tấn Công", type: 'attack', description: "Bảo vệ quyền sở hữu trí tuệ văn hóa. Chọn một đối thủ vi phạm để phạt lùi 5 ô." },
  { id: 25, name: "Triển Lãm Văn Hóa 🖼️", group: "Mua Thẻ", type: 'buy_card', description: "Giới thiệu văn hóa ra thế giới. Trả lời đúng để mua thẻ đặc biệt." },
  { id: 26, name: "Di Sản Thế Giới UNESCO 🏆", group: "Thưởng", type: 'reward', description: "Được công nhận là di sản thế giới. Nhận phần thưởng lớn về KP." },
  { id: 27, name: "Phá Vỡ Cảnh Quan 🚧", group: "Phạt", type: 'penalty', description: "Xây dựng trái phép làm hỏng cảnh quan di sản. Bị phạt nặng về KP." },
  { id: 28, name: "Đầu Tư Số Hóa Di Sản 💻", group: "Đầu Tư", type: 'investment', description: "Ứng dụng công nghệ vào bảo tồn. Đặt cược KP, thành công (x2) hoặc thất bại (mất)." },
  { id: 29, name: "Giữ Gìn Tiếng Nói Chữ Viết ✍️", group: "Thưởng", type: 'reward', description: "Bảo tồn thành công ngôn ngữ mẹ đẻ. Nhận thưởng KP xứng đáng." },
  { id: 30, name: "Thử Thách Hội Nhập 🎲", group: "Đầu Tư", type: 'investment', description: "Hội nhập nhưng không hòa tan. Đặt cược bản lĩnh (KP) để nhận phần thưởng gấp đôi." },

  // Cạnh phải
  { id: 31, name: "Vùng Lãng Quên 🌫️", group: "Đặc Biệt", type: 'prison', description: "Nơi văn hóa bị lãng quên. Phải trả lời 30 câu hỏi để khôi phục ký ức và quay lại hành trình." },
  { id: 32, name: "Tự Hào Dân Tộc 🇻🇳", group: "Thưởng", type: 'reward', description: "Niềm tự hào lan tỏa sức mạnh. Thưởng KP hoặc tiến thêm bước dài." },
  { id: 33, name: "Lai Căng Văn Hóa 🎭", group: "Phạt", type: 'penalty', description: "Tiếp thu thiếu chọn lọc gây phản cảm. Bị trừ KP để chấn chỉnh." },
  { id: 34, name: "Quỹ Phát Triển Văn Hóa 🎁", group: "Quỹ Tri Thức", type: 'knowledge_fund', description: "Nhận tài trợ cho dự án văn hóa. Được quyền trợ giúp 50/50 miễn phí 2 lượt." },
  { id: 35, name: "Không Gian Văn Hóa 🎋", group: "Mua Thẻ", type: 'buy_card', description: "Xây dựng không gian sinh hoạt cộng đồng. Trả lời đúng để mua thẻ." },
  { id: 36, name: "Giao Lưu Cồng Chiêng 🔔", group: "Cơ Hội", type: 'opportunity', description: "Tiếng cồng chiêng vang vọng núi rừng. Chọn người cùng tham gia lễ hội lượt tới." },
  { id: 37, name: "Xâm Lấn Đất Đai 🚧", group: "Tấn Công", type: 'attack', description: "Đất văn hóa bị xâm lấn trái phép. Chọn đối thủ vi phạm để phạt lùi 5 ô." },
  { id: 38, name: "Sáng Kiếm Bảo Tồn 💎", group: "Thưởng", type: 'reward', description: "Đề xuất giải pháp bảo tồn thông minh. Nhận thưởng KP." },
  { id: 39, name: "Trung Tâm Nghiên Cứu 🔬", group: "Mua Thẻ", type: 'buy_card', description: "Nghiên cứu sâu sắc về văn hóa. Trả lời đúng để mua thẻ tri thức." },
  { id: 40, name: "Cược Bản Sắc 🏛️", group: "Đầu Tư", type: 'investment', description: "Khẳng định bản sắc trong thời đại mới. Đặt cược KP nếu tự tin, x2 hoặc mất tất cả." }
];