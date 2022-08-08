import Copyright from "./Copyright";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Copyright,
} as ComponentMeta<typeof Copyright>;

export const Default: ComponentStory<typeof Copyright> = () => {
  return <Copyright />;
};
