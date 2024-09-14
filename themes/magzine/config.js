const CONFIG = {
  // 首屏信息栏按钮文字
  MAGZINE_HOME_BANNER_ENABLE: true, // 首屏右上角的宣传位
  MAGZINE_HOME_BUTTON: true,
  MAGZINE_HOME_BUTTON_URL: '/about',
  MAGZINE_HOME_BUTTON_TEXT: 'Learn More',

  MAGZINE_HOME_HIDDEN_CATEGORY: '模板页面', //不希望在首页展示的文章分类，用英文逗号隔开

  MAGZINE_HOME_TITLE: 'Elevating Possibilities',
  MAGZINE_HOME_DESCRIPTION:
    'Innovating the Skies with Cutting-Edge Drone Technology. Explore the World of Autonomous Drones.',
  MAGZINE_HOME_TIPS: 'Extending the altitude of technology in aircraft control and algorithms using the latest advancements, amplifying the impact and efficiency of modern aviation technology.',

  // 首页底部推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  MAGZINE_RECOMMEND_POST_TAG: '推荐',
  MAGZINE_RECOMMEND_POST_COUNT: 6,
  MAGZINE_RECOMMEND_POST_TITLE: 'Recommended Articles',
  MAGZINE_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // Style
  MAGZINE_RIGHT_PANEL_DARK: process.env.NEXT_PUBLIC_MAGZINE_RIGHT_DARK || false, // 右侧面板深色模式

  MAGZINE_POST_LIST_COVER: true, // 文章列表显示图片封面
  MAGZINE_POST_LIST_PREVIEW: true, // 列表显示文章预览
  MAGZINE_POST_LIST_CATEGORY: true, // 列表显示文章分类
  MAGZINE_POST_LIST_TAG: true, // 列表显示文章标签

  MAGZINE_POST_DETAIL_CATEGORY: true, // 文章显示分类
  MAGZINE_POST_DETAIL_TAG: true, // 文章显示标签

  // 文章页面联系卡
  MAGZINE_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  MAGZINE_SOCIAL_CARD_TITLE_1: '交流频道',
  MAGZINE_SOCIAL_CARD_TITLE_2: '加入社群讨论分享',
  MAGZINE_SOCIAL_CARD_TITLE_3: '点击加入社群',
  MAGZINE_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/chat-community',

  // 页脚菜单
  MAGZINE_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: 'Tangly的学习笔记',
          href: 'https://blog.tangly1024.com'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        }
      ]
    },
    {
      name: 'About Me',
      menus: [
        { title: 'Github', href: 'https://github.com/Phillweston/' },
        { title: 'Official Website', href: '/#home' },
        { title: 'Help & Support', href: '/how-to-question' },
        { title: 'Friend Link', href: '/links' },
        { title: 'Cooperators', href: '/cooperators' },
        { title: 'Gallery', href: '/gallery' },
        { title: 'Open Source Code', href: '/open-source-code' },
        { title: 'Website Technology', href: '/website-technology' }
      ]
    },
    {
      name: 'Case Studies',
      menus: [
        {
          title: 'Disk Array Failure Prediction System',
          href: '/article/lstm-deep-transfer-learning-disk-array-failure-prediction'
        },
        { title: 'UAV Line Inspection System Based on Deep Learning', href: '/article/deep-learning-drone-inspection-system' },
        { title: 'Intelligent Aerial Surveillance System', href: '/article/yichi-defense-system-comprehensive-control-dynamics' },
        { title: 'High-altitude Paint Repair Drone', href: '/article/weiyuan-wing-high-altitude-painting-drone' },
        { title: 'Urban and Rural Intelligent Logistics UAV System', href: '/article/hongyun-smart-logistics-drone-system-urban-rural' },
        { title: 'Drone-based Intelligent Scenic Garbage Cleaning System', href: '/article/drone-based-intelligent-scenic-area-waste-cleanup-system' },
        { title: 'Remote All-round Real-time Environmental Monitoring System', href: '/article/remote-full-spectrum-real-time-environment-monitoring-system' },
        { title: 'UAV Integrated Education System', href: '/article/smart-manufacturing-future-drone-integrated-education-system' },
        { title: 'Guardian of the Sky Eye', href: '/article/sky-eye-guardian' },
        { title: 'Software-defined Radio-based Anti-drone System', href: '/article/drone-nemesis-software-radio-based-anti-drone-system' },
        { title: 'Multifunctional Underwater Drone', href: '/article/dragon-rise-from-depths-multifunctional-underwater-drone' },
        { title: 'Aerial Antenna Power Pattern Testing System', href: '/article/hexacopter-drone-antenna-power-pattern-testing-system-development' },
      ]
    },
    {
      name: 'For References',
      menus: [
        { title: 'Micro Quadrotor Development Guide', href: '/article/micro-quadrotor-development-guide' },
        { title: 'EE Vocabulary Preview', href: '/article/ee-vocabulary-preview' },
        { title: 'MEMS IMU Device Selection Reference Table (Partial)', href: '/article/mems-imu-selection-reference-table' },
        { title: 'List of Papers Related to Shadowsocks', href: '/article/list-of-papers-related-to-shadowsocks' },
        { title: '.NET Framework Regular Expressions', href: '/article/dotnet-framework-regular-expressions' },
        { title: 'DJI Remote Control MAVLink Protocol V1.0', href: '/article/dji-remote-control-mavlink-protocol-v1-0' }
      ]
    }
  ],

  // 旧版本顶部菜单
  MAGZINE_MENU_CATEGORY: true, // 显示分类
  MAGZINE_MENU_TAG: true, // 显示标签
  MAGZINE_MENU_ARCHIVE: true, // 显示归档
  MAGZINE_MENU_SEARCH: true, // 显示搜索

  MAGZINE_WIDGET_TO_TOP: true // 跳回顶部
}
export default CONFIG
