import React from "react";
import Comment from "./Comment";
import { render } from "enzyme";

it("should render text", () => {
  const comment = {
    comment: "test"
  };
  const wrapper = render(<Comment c={comment} />);
  expect(wrapper.text()).toBe("Comentario: test");
});

it("should render empty", () => {
  const c = {
    comment: ""
  };
  const wrapper = render(<Comment c={c} />);
  expect(wrapper.text()).toBe("Comentario: vazio");
});
