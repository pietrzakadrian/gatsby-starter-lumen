import React from "react";

import { Collaboration } from "@/components/Collaboration";
import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Partners } from "@/components/Partners";

const CollaborationTemplate: React.FC = () => (
  <Layout>
    <Sidebar />
    <Page title="Collaboration">
      <Collaboration />
      <Partners />
    </Page>
  </Layout>
);

export const Head: React.FC = () => {
  const { title, subtitle } = useSiteMetadata();
  const pageTitle = `Collaboration — ${title}`;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default CollaborationTemplate;
