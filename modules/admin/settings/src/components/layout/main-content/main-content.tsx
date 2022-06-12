import { Box } from "@chakra-ui/react";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const WP_ADMIN_SIDEBAR_WIDTH_PX = "160px";
  const WP_ADMIN_TOPBAR_HEIGHT_PX = "32px";

  return (
    <Box
      id="ctd-main"
      minW={`calc(100vw - ${WP_ADMIN_SIDEBAR_WIDTH_PX})`}
      minH={`calc(100vh - ${WP_ADMIN_TOPBAR_HEIGHT_PX})`}
      position="relative"
    >
      {children}
    </Box>
  );
}
