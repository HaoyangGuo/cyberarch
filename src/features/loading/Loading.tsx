import { Box, CircularProgress } from "@chakra-ui/react"

const Loading = () => {
  return (
    <Box w={"full"} h={"full"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <CircularProgress isIndeterminate color='teal.200'  size={"100px"} />
    </Box>
  )
}

export default Loading