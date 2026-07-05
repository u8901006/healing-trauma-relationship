import type { AttachmentPattern, AttachmentPatternId } from "@/lib/types";

export const patterns: AttachmentPattern[] = [
  {
    id: "avoidant",
    name: "逃避型依附",
    subtitle: "Avoidant Attachment — 去活化策略",
    emoji: "🧱",
    strategy: "去活化（Deactivation）",
    color: "#8c4f2b",
    selfScenarioTitle: "伴侶想靠近的時刻",
    selfScenarioDesc:
      "週末晚餐後，伴侶想聊聊最近的心情、尋求情感連結。你感到一股想撤退的衝動——離開餐桌、滑手機、找件事做。",
    therapistScenarioTitle: "面對「一切都好」的個案",
    therapistScenarioDesc:
      "個案在會談中維持「一切都好」的防衛，當你試圖靠近感受時，他退回智性化、敘事貧瘠、聳肩說「就……正常啊」。",
    formation:
      "逃避型依附是對拒絕與負向行為的適應性反應。照顧者貶抑依附需求、拒絕、侵入或羞辱，孩子學會用去活化策略關閉依附系統——移開注意力、否認需求、偽自我依賴——以避免被拒絕的痛。代價是情感與關係生活的萎縮。",
    protectiveFunction:
      "去活化策略保護了個體免於反覆被拒絕的痛苦，同時維繫了與照顧者的連結（即使是有缺陷的連結）。它讓孩子在不可靠的環境中維持運作與自我完整性。這份保護是真實的——只是代價慘重。",
    aedpLens:
      "AEDP 以接納作為拒絕的解藥，偵測轉化傾向的微光（到來治療本身就是轉化傾向在運動）。介入方向是上調——重新連結被去活化的情緒經驗。Triangle of Experience 上，防衛在頂點（智性化、沉默之牆），焦慮是羞恥與被拒絕，底部是被排除的依附渴望。",
    contentWarning:
      "本主題涉及情感退縮、關係疏離、被拒絕的恐懼及早期依附創傷相關內容，可能觸發類似的情緒經驗。請在自身狀態穩定時探索，必要時尋求支持。",
    sourceFormation: "逃避型-去活化策略.md（第7章）",
    sourceTransformation: "逃避型-轉化與介入.md（第8章 Grid 4）",
  },
  {
    id: "ambivalent",
    name: "矛盾型依附",
    subtitle: "Ambivalent/Resistant Attachment — 過度活化策略",
    emoji: "🌊",
    strategy: "過度活化（Hyperactivation）",
    color: "#b87333",
    selfScenarioTitle: "訊息已讀不回",
    selfScenarioDesc:
      "伴侶已讀不回你的訊息兩個小時了。你反覆檢查手機、焦慮攀升、腦中開始上演各種劇本——他是不是不高興？我是不是說錯了什麼？",
    therapistScenarioTitle: "面對黏膩難安撩的個案",
    therapistScenarioDesc:
      "個案在會談間頻繁來訊、話題發散難以聚焦、傾向「嘔吐出所有壞事」後更失調。她需要結構與引導，否則會在自己設備下行將潰堤。",
    formation:
      "矛盾型依附是逃避型的硬幣反面。照顧者不一致、不可靠、沉浸於自己的需求。孩子發展過度活化策略——誇大苦惱、升高伸手、維持高度警戒——試圖抓住偶爾可及的照顧者。代價是失去傾聽自我訊號的能力，陷入偽關係性的攀附循環。",
    protectiveFunction:
      "過度活化策略讓孩子在照顧者不可預測的可及性中，盡可能維持連結。緊盯照顧者、誇大訊號——在不可靠的環境裡，這是合理的求生邏輯。問題不在策略本身，而在它成年後仍全速運轉。",
    aedpLens:
      "AEDP 格言「不只是鏡映，而是幫助」是核心——個案需要結構、引導、被明確幫助。介入方向是下調與含容（對照逃避型的上調）。Triangle of Experience 上，防衛是話語之牆與情緒化，焦慮是被拋棄與不確定，底部是被蓋過的、模糊的真實需求。",
    contentWarning:
      "本主題涉及關係焦慮、被拋棄恐懼、情緒淹沒及早期不一致照顧相關內容，可能觸發類似的情緒經驗。請在自身狀態穩定時探索，必要時尋求支持。",
    sourceFormation: "矛盾型-過度活化策略.md（第9章）",
    sourceTransformation: "矛盾型-轉化與介入.md（第10章 Grid 5）",
  },
  {
    id: "disorganized",
    name: "混亂型依附",
    subtitle: "Disorganized Attachment — 策略崩潰",
    emoji: "🌀",
    strategy: "崩潰（Collapse）",
    color: "#6b4226",
    selfScenarioTitle: "親密又恐懼的矛盾時刻",
    selfScenarioDesc:
      "伴侶展現溫暖，想擁抱你。你同時想靠近又想逃——身體卻凍住了。腦中一片空白，眼神飄走，你感覺自己「不在這裡」了。",
    therapistScenarioTitle: "面對「依附無解」的個案",
    therapistScenarioDesc:
      "個案在會談中突然解離——眼神空洞、「光從眼裡熄滅」——或反覆陷入無助，既想靠近你又被你嚇到。你的穩定同在是他生命中稀缺的經驗。",
    formation:
      "混亂型依附不是一個型態本身，而是策略的崩潰——當依附對象同時是恐懼的來源。照顧者未解決自身創傷，被嚇到且／或嚇人。孩子陷入「沒有解的恐嚇」與「沒有解的依附」——無處可逃、無人可求。解離、凍結、碎片化是結果。",
    protectiveFunction:
      "崩潰與解離保護了系統免於完全碎裂。當淹沒超出負荷，關機是讓系統存活的緊急機制。角色反轉（反過來照顧照顧者）則換得一些安全距離與可控感。這些都是創傖時間裡的求生學習——只是至今仍全速運轉。",
    aedpLens:
      "AEDP 以冷靜的力量（calm strength）為核心後設技能——可靠、恆常、有界線、合作。介入方向是滴定——在容納窗內一點一點地工作。持有「既／且」的空間：允許想靠近又想逃同時存在。修復失同步本身是療癒。",
    contentWarning:
      "本主題涉及未解決創傷、解離、碎片化、恐懼與親密綁在一起的依附創傷，內容高度敏感，可能引發強烈情緒。本工具為練習用途，絕非治療或危機處置的替代品。如果您正在經歷相關困擾，請尋求專業協助：安心專線 1925、生命線 1995、張老師 1980。",
    sourceFormation: "混亂型-策略崩潰與歷史.md（第11章）",
    sourceTransformation: "混亂型-轉化與介入.md（第12章 Grid 6）",
  },
];

export function getPattern(id: AttachmentPatternId): AttachmentPattern {
  const pattern = patterns.find((p) => p.id === id);
  if (!pattern) {
    throw new Error(`Pattern not found: ${id}`);
  }
  return pattern;
}
