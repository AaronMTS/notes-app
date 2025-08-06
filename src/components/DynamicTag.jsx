const DynamicTag = ({ tag, children, attributes }) => {
  const TagName = tag;

  return <TagName {...attributes} >{children}</TagName>;
};

export default DynamicTag;
