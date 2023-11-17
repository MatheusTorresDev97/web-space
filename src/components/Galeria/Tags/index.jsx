import { TagsContainer, TagTitulo, Tag, Div } from "./styles";
import tags from './tags.json'

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.titulo}</Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
