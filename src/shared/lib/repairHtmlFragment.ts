const MISSING_LEADING_TAG_RE =
  /^(table|tbody|thead|tfoot|tr|td|th|colgroup|col|div|span|p|ul|ol|li|blockquote|pre|h[1-6]|meta|style|img|a)\b[^>]*>/i;

export const isHtmlishTagText = (text: string): boolean => {
  return MISSING_LEADING_TAG_RE.test((text || "").trim());
};

export const repairHtmlFragment = (html: string): string => {
  const trimmed = (html || "").trim();
  if (!trimmed || trimmed.startsWith("<")) {
    return trimmed;
  }

  if (isHtmlishTagText(trimmed)) {
    return `<${trimmed}`;
  }

  return trimmed;
};
