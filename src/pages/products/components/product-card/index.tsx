import React from 'react';
import {Badge, Card, Image, Rating, Stack, Text} from "@mantine/core";

const ProductCard = ({data}: any) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder h={'100%'}>
            <Card.Section>
                <Image
                    fit="contain"
                    src={data?.thumbnail}
                    height={180}
                    alt="Norway"
                />
            </Card.Section>
            <Stack justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{data?.title}</Text>
                <Badge color="pink">${data?.price}</Badge>
                <Rating value={data?.rating} fractions={2} readOnly/>
            </Stack>
            <Text size="sm" c="dimmed">
                {data?.description}
            </Text>
        </Card>
    );
};

export default ProductCard;
