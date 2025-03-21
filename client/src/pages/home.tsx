import { Box, Flex, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { isAndroid } from "react-device-detect";
import { BlackTerminalPage } from "@/components/shared/BlackTerminalPage";
import { MultilineTypewriter } from "@/components/shared/MultilineTypewriter";
import { Terminal } from "@/components/shared/Terminal";

type State = "intro" | "interactive";

function HomeScreen() {
  const [state, setState] = useState<State>("intro");

  const intro = useMemo(
    () => (
      <MultilineTypewriter
        texts={[
          "Hello, welcome to my personal website",
          ". . .",
        ]}
        onFinish={() => setState("interactive")}
      />
    ),
    []
  );

  return (
    <BlackTerminalPage>
      {intro}
      <Flex w="100%" flexDir="column">
        {isAndroid && state === "interactive" ? (
          <>
            <Text>
              For Android users: press ENTER once if you have trouble typing
              anything
            </Text>
            <Box h={5} />
          </>
        ) : null}
      </Flex>
      {state === "interactive" && <Terminal withHelp />}
    </BlackTerminalPage>
  );
}

export default dynamic(() => Promise.resolve(HomeScreen), {
  ssr: false,
});
