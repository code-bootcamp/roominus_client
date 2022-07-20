import styled from "@emotion/styled";

export default function Tag(props: any) {
  const onKeyPress = (e) => {
    const hashedtag = e.target.value.replace(
      e.target.value,
      `#${e.target.value}`
    );
    if (e.key === "Enter") {
      console.log(props.tagList);
      //처음에 입력한 값
      if (props.tagList === undefined) {
        console.log(props.tagList);
        props.setTagList([hashedtag]);
        props.setTagItem("");
      } else {
        //추가로 입력한 값
        console.log(hashedtag);
        props.setTagList((prev) => [...prev, hashedtag]);
        // addList.filter((tagList: any) => tagList !== e.target.value);
        props.setTagItem("");
      }
    }
  };

  const deleteTagItem = (e: any) => {
    console.log(e);
    const deleteTagItem = e.target.parentElement.firstChild.innerHTML;
    const filteredTagList = props.tagList.filter(
      (tagItem: any) => tagItem !== deleteTagItem
    );
    props.setTagList(filteredTagList);
  };

  const onChangeInput = (e: any) => {
    props.setTagItem(e.target.value);
  };

  return (
    <TagBox>
      {/* 등록시 map */}
      {props.tagList?.map((tagItem: any, index: number) => {
        // const hashedtag = tagItem.replace(tagItem, `#${tagItem}`);
        return (
          <TagItem key={index}>
            <Text>{tagItem}</Text>
            <Button type="button" onClick={deleteTagItem}>
              X
            </Button>
          </TagItem>
        );
      })}
      <TagInput
        type="text"
        placeholder="태그를 입력해주세요"
        tabIndex={2}
        onChange={onChangeInput}
        value={props.tagItem}
        onKeyPress={onKeyPress}
      />
    </TagBox>
  );
}

const TagBox = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px solid #a3a8b7;
  box-shadow: 0px 4px rgba(217, 214, 224, 0.25);
  margin-bottom: 1em;

  /* padding: 0 10px; */
  /* background-color: pink; */

  /* &:focus-within {
    border-color: tomato;
  } */
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 0.4em 0.8em;
  background-color: #d9d6e0;
  border-radius: 5px;
  /* color: white; */
  font-size: 13px;
`;

const Text = styled.span`
  font-size: 1.1em;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  margin-left: 0.3em;
  background-color: #d9d6e0;
  border-radius: 50%;
  border: none;
`;

const TagInput = styled.input`
  /* display: inline-flex; */
  width: 12em;
  height: 3em;
  margin-left: 0.4em;
  /* background-color: red; */
  /* background: transparent; */
  border: none;
  outline: none;
  /* cursor: text; */
`;
