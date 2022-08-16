import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import CountdownsTable from "../../countdowns-table/countdown-table";

import useCountdownsList from "../../hooks/useCountdownList";
import Pagination from "../pagination/pagination";
import ModalFirstCountdown from "../modal-first-countdown/modal-first-countdown";
import TableSkeleton from "../table-skeleton/table-skeleton";
import ModalNewCountdown from "../modal-new-countdown/modal-new-countdown";
import { PremiumFeature } from "../../../premium-features";

// TODO: handling errors
export default function Countdowns() {
  const { t } = useTranslation();
  const { countdowns, isLoading, isError } = useCountdownsList();

  if (isError) {
    return <Heading>Error!</Heading>;
  }

  return (
    <Flex id="countdowns-list" flexDir={"column"}>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <>
          {countdowns && countdowns.length > 0 ? (
            <PremiumFeature
              customText={t("premiumFeatures.modal.body.newCountdown", {
                maxCountdowns: "1",
              })}
            >
              <VStack alignItems={"flex-start"}>
                <Pagination data={countdowns} rowsPerPage={5}>
                  <CountdownsTable />
                </Pagination>
              </VStack>
            </PremiumFeature>
          ) : (
            <ModalFirstCountdown />
          )}
        </>
      )}
    </Flex>
  );
}
