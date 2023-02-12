import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index";
import { Container, HStack, VStack, Text, Heading, Image, RadioGroup } from '@chakra-ui/react';
import { Button, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import ErrComponent from './ErrComponent';
import CoinCard from './CoinCard';

function Coins() {

  const [coins, setCoins] = useState([])
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr")


  const currencySymbol = currency === "inr" ? " ₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setloading(true);
  }
  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        setCoins(data);
        console.log(data);
        setloading(false)

      } catch (error) {
        setError(true);
        setloading(false);

      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrComponent message="ERROR WHILE FETCHING MESSAGE" />

  return <Container maxW={"container.xl"}>
    {/* conditional rendering */}
    {loading ? <Loader /> : (

      <>
        <RadioGroup value={currency} onChange={setCurrency} p={"8"} >
          <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map((i) => (
            <CoinCard
              key={i.id}
              id={i.id}
              price={i.current_price}
              symbol={i.symbol}
              name={i.name}
              img={i.image}
              currencySymbol={currencySymbol}
              rank={i.trust_score_rank}
              url={i.url} />
          ))
          }
        </HStack>

        <HStack w={"full"} overflow={"auto"} p={"8"}>
          {btns.map((item, index) => (
            <Button
              key={index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </Button>
          )
          )}

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
        "&:hover": {
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



export default Coins