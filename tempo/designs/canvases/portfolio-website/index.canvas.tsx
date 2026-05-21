import type { TempoPage, TempoStoryboard } from "tempo-sdk";
import { PortfolioPreview } from "./PortfolioPreview";

const page: TempoPage = {
  name: "Portfolio Website",
};

export default page;

export const Preview: TempoStoryboard = {
  render: () => <PortfolioPreview />,
  layout: { x: 0, y: 0, width: 1440, height: 1800 },
};
