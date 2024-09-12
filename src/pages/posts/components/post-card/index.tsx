import {Text, TypographyStylesProvider, Paper, Flex, Stack} from '@mantine/core';
import {PostCardWrapper} from "@/pages/posts/components/post-card/style.ts";

export function PostCard({data}: any) {
    return (
        <PostCardWrapper>
            <Paper withBorder radius="md" className="comment" h={'100%'}>
                <Stack gap={0}>
                        <Text fz="md" fw={600}>{data?.title}.</Text>
                        <Flex gap="sm" mt={'18px'}>
                            <Text fz="xs" c="dimmed">
                                Likes: {data?.reactions?.likes}
                            </Text>
                            <Text fz="xs" c="dimmed">
                                Dislikes: {data?.reactions?.dislikes}
                            </Text>
                            <Text fz="xs" c="dimmed">
                               Views: {data?.views}
                            </Text>
                        </Flex>
                </Stack>
                <TypographyStylesProvider className="body">
                    <div className="content">
                        <Text fz="sm">{data?.body}</Text>
                    </div>
                </TypographyStylesProvider>
            </Paper>
        </PostCardWrapper>

    );
}
