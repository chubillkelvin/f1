import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageTitle from "./PageTitle";

export default {
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

export const Default: ComponentStory<typeof PageTitle> = (args) => {
  return <PageTitle title={args.title} />;
};

Default.args = {
  title: "Hello, World!",
};
