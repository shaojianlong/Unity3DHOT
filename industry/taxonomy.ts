// Unity3DHOT 的游戏制作词表。分类 key、实体 id 和主题 slug 在上线后保持稳定。
export const CATEGORIES = [
  { key: "rendering", label: "渲染与图形学", section: "图形与渲染", guide: "新的实时渲染算法、Shader、光照、材质方法及图形研究。论文附源码仍按研究重点归这里；主要结论是资源消耗或平台表现时归 performance；既有方法的入门教学归 tip。" },
  { key: "engine", label: "引擎与运行时", section: "引擎与工具", guide: "Unity、Unreal、Godot 等引擎的重要发布、版本、运行时能力和架构变化。具体渲染方法归 rendering，独立工具和插件归 tools；引擎许可及商业政策归 business-case。" },
  { key: "performance", label: "性能与平台", section: "工程与性能", guide: "CPU/GPU 帧耗时、内存、加载、移动端和跨平台适配，重点是测量、瓶颈和优化取舍。保留硬件、版本、分辨率和场景条件，不泛化单个场景结果。" },
  { key: "art-pipeline", label: "3D 与技术美术", section: "美术与制作", guide: "建模、材质生产、绑定动画、VFX、程序化资产和美术管线。聚焦资产生产与制作流程；主要提出渲染算法时归 rendering。" },
  { key: "indie-dev", label: "独立开发实践", section: "独立开发", guide: "独立开发者和小工作室的原型、范围控制、协作、制作流程及项目复盘。以制作取舍和方法为重点；以成本、收入或发行结果为重点时归 business-case。" },
  { key: "business-case", label: "商业与发行案例", section: "商业与发行", guide: "有出处的成本、销量、收入、愿望单、发行复盘，以及影响制作决策的平台或引擎商业规则。区分收入和利润、披露和估算；无制作关联的融资、股价和人事不属于本站重点。" },
  { key: "tools", label: "工具与插件", section: "引擎与工具", guide: "可使用的游戏制作工具、插件、开源工程及重要功能发布。工具发布归这里；仅演示已有工具用法归 tip，有新研究方法的源码归 rendering。" },
  { key: "tip", label: "教程与实践", section: "教程与观点", guide: "既有技术的系统教学、上手指南和实践讲解。新的算法、资产方法或测量结论按对应技术方向分类，不因有教学步骤就一律归教程。", commentary: true },
  { key: "opinion", label: "观点与访谈", section: "教程与观点", guide: "以观点、预测、经验解释或访谈为核心，缺少新的具体动作。已发生的制作方法或商业结果分别归 indie-dev 或 business-case。", commentary: true },
] as const satisfies ReadonlyArray<{ key: string; label: string; feedLabel?: string; section: string; guide: string; commentary?: true }>;

// 不将引擎小更新或 3D 模型资产计成原 AI 示例站的“新模型”。
export const RELEASE: { category: string; tag: string; unit: string } | null = null;
export const PLAIN_TERMS: readonly string[] = ["cpu", "gpu", "api", "sdk", "shader", "urp", "hdrp", "fps", "pbr", "vfx", "lod", "gi", "taa", "dlss", "fsr", "ecs", "dots", "uv", "3d", "2d", "webgpu", "hlsl", "glsl"];

// 与 selection-score.md 的权重行和 content-understanding.md 的输出类型同步。
export const ITEM_TYPES = ["engine_release", "tool_release", "production_method", "research_paper", "industry_event", "opinion_analysis", "tutorial_explainer"] as const;
export const CATEGORY_TAGS = ["引擎发布", "引擎更新", "工具发布", "技术拆解", "论文/研究", "开源/仓库", "教程/实践", "评测/基准", "开发复盘", "商业复盘", "行业动态", "观点分析", "其他"] as const;
export const TOPIC_TAGS = ["Unity", "URP", "HDRP", "Shader", "GPU", "实时渲染", "光照", "材质", "光线追踪", "性能优化", "移动端", "跨平台", "程序化生成", "技术美术", "VFX", "动画", "3D资产", "Blender", "Unreal Engine", "Godot", "WebGPU", "ECS/DOTS", "独立游戏", "Steam", "发行", "开发成本", "Demo", "源码"] as const;
export const ENTITY_TAGS = ["Unity", "Epic Games", "Valve", "NVIDIA", "AMD", "Blender", "Godot", "Khronos", "Wube", "Suspicious Developments", "Positech"] as const;
export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  着色器: "Shader", shader: "Shader", "通用渲染管线": "URP", "高清渲染管线": "HDRP",
  "技术美术师": "技术美术", TA: "技术美术", "性能调优": "性能优化", 光追: "光线追踪",
  "程序化内容生成": "程序化生成", "制作复盘": "开发复盘", "发行复盘": "商业复盘",
  "独立开发": "独立游戏", "三维资产": "3D资产", "3D 资产": "3D资产",
  "虚幻引擎": "Unreal Engine", UE: "Unreal Engine", UE5: "Unreal Engine",
  DOTS: "ECS/DOTS", ECS: "ECS/DOTS", "源码开放": "开源/仓库",
  "open-source": "开源/仓库", 开源: "开源/仓库", 仓库: "开源/仓库", repo: "开源/仓库",
  论文: "论文/研究", 研究: "论文/研究", paper: "论文/研究", papers: "论文/研究",
  教程: "教程/实践", 指南: "教程/实践", 实践: "教程/实践", "最佳实践": "教程/实践",
  benchmark: "评测/基准", Benchmark: "评测/基准", 评测: "评测/基准", 观点: "观点分析",
  行业: "行业动态", 动态: "行业动态", 商业案例: "商业复盘", 工具更新: "工具发布",
};

export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[]; otherNames?: string[] }> = {
  unity: { name: "Unity", displayTag: "Unity", aliases: ["Unity", "Unity Technologies"], otherNames: ["Unity Engine", "Unity 官方"] },
  epic: { name: "Epic Games", displayTag: "Epic Games", aliases: ["Epic Games", "Epic"], otherNames: ["Unreal Engine", "虚幻引擎"] },
  valve: { name: "Valve", displayTag: "Valve", aliases: ["Valve", "Valve Corporation", "维尔福"], otherNames: ["Steamworks"] },
  nvidia: { name: "NVIDIA", displayTag: "NVIDIA", aliases: ["NVIDIA", "英伟达"], otherNames: ["NVIDIA Developer"] },
  amd: { name: "AMD", displayTag: "AMD", aliases: ["AMD", "Advanced Micro Devices", "超威半导体"], otherNames: ["GPUOpen"] },
  blender: { name: "Blender", displayTag: "Blender", aliases: ["Blender", "Blender Foundation"], otherNames: ["Blender Developers"] },
  godot: { name: "Godot", displayTag: "Godot", aliases: ["Godot", "Godot Engine", "Godot Foundation"] },
  khronos: { name: "Khronos", displayTag: "Khronos", aliases: ["Khronos", "Khronos Group"] },
  wube: { name: "Wube", displayTag: "Wube", aliases: ["Wube", "Wube Software"], otherNames: ["Factorio"] },
  "suspicious-developments": { name: "Suspicious Developments", displayTag: "Suspicious Developments", aliases: ["Suspicious Developments", "Tom Francis"], otherNames: ["Pentadact"] },
  positech: { name: "Positech", displayTag: "Positech", aliases: ["Positech", "Positech Games", "Cliff Harris"] },
};

// 技术词本身不是厂商发布的证据；标题中的公司或品牌仍须在原文可追溯。
export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "unity", name: "Unity", patterns: [/\bunity\b/i] },
  { id: "epic", name: "Epic Games", patterns: [/\bepic(?:\s+games)?\b|\bunreal\s+engine\b|虚幻引擎/i] },
  { id: "valve", name: "Valve", patterns: [/\bvalve\b|\bsteamworks\b|维尔福/i] },
  { id: "nvidia", name: "NVIDIA", patterns: [/\bnvidia\b|英伟达/i] },
  { id: "amd", name: "AMD", patterns: [/\bamd\b|advanced\s+micro\s+devices|\bgpuopen\b|超威半导体/i] },
  { id: "blender", name: "Blender", patterns: [/\bblender\b/i] },
  { id: "godot", name: "Godot", patterns: [/\bgodot\b/i] },
  { id: "khronos", name: "Khronos", patterns: [/\bkhronos\b/i] },
  { id: "wube", name: "Wube", patterns: [/\bwube\b|\bfactorio\b/i] },
  { id: "suspicious-developments", name: "Suspicious Developments", patterns: [/suspicious\s+developments|tom\s+francis|\bpentadact\b/i] },
  { id: "positech", name: "Positech", patterns: [/\bpositech\b|cliff\s+harris/i] },
];
export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "unity", domains: ["unity.com", "unity3d.com"] },
  { entityId: "epic", domains: ["epicgames.com", "unrealengine.com"] },
  { entityId: "valve", domains: ["valvesoftware.com", "partner.steamgames.com"] },
  { entityId: "nvidia", domains: ["nvidia.com"] },
  { entityId: "amd", domains: ["amd.com", "gpuopen.com"] },
  { entityId: "blender", domains: ["blender.org"] },
  { entityId: "godot", domains: ["godotengine.org", "godot.foundation"] },
  { entityId: "khronos", domains: ["khronos.org"] },
  { entityId: "wube", domains: ["factorio.com"] },
  { entityId: "suspicious-developments", domains: ["pentadact.com", "suspiciousdevelopments.com"] },
  { entityId: "positech", domains: ["positech.co.uk"] },
];
export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [
  { entityId: "unity", pattern: /@unity(?:games)?\b/i },
  { entityId: "epic", pattern: /@unrealengine\b/i },
  { entityId: "amd", pattern: /@gpuopen\b/i },
];
