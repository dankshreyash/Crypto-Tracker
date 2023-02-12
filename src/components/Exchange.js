import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index";
import { Container, HStack, VStack, Text, Heading, Image } from '@chakra-ui/react';
import Loader from './Loader';
import ErrComponent from './ErrComponent';

function Exchange() {

  const [exchanges, setExchanges] = useState([])
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setExchanges(data);
        setloading(false)

      } catch (error) {
        setError(true);
        setloading(false);

      }


    }
    fetchExchanges();
  }, []);

  if (error) return <ErrComponent message="ERROR WHILE FETCHING MESSAGE" />

  return <Container maxW={"container.xl"}>
    {/* conditional rendering */}
    {loading ? <Loader /> : (

      <>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url} />
          ))
          }
        </HStack>
      </>

    )}
  </Container>

};
const ExchangeCard = ({ name, img, rank, url }) => (

  <a href={url} target={"blank"} >
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "& :hover": {
          transform: "scale(1.1)",
        },
      }}>
      <Image src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"} />

      <Heading size={"md"} noOfLines={1}>
        {rank}

      </Heading>
      <Text>{name}</Text>
    </VStack>

  </a>
)



export default Exchange