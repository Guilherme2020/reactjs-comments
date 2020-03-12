import React from "react";
import { shallow } from "enzyme";
import Comments from "./Comments";
import Comment from "./Comment";

describe("<Comments />", () => {
  it("should render Comments", () => {
    const comments = {
      a: {
        id: "a",
        comment: "Comment 1"
      },
      b: {
        id: "b",
        comment: "Comment 2"
      }
    };

    const wrapper = shallow(<Comments comments={comments} />);
    expect(wrapper.find(Comment).length).toBe(2);

    console.log(wrapper.find(Comment).get(0).props.c).toBe(comments.a);

    console.log(wrapper.find(Comment).get(1).props.c).toBe(comments.b);

    console.log(wrapper.find(Comment).get(0).key);
  });
});
