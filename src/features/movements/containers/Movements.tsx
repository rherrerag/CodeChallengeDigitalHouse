import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, Dimensions} from 'react-native';
import {Box, VStack, HStack, Heading, Spinner} from 'native-base';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../../common/hooks/hooks';
import {
  fetchMovementsData,
  setEarnedMovements,
  setRedeemedMovements,
} from '../reducers/movements.actions';
import {
  selectMovements,
  selectEarnedMovements,
  selectRedeemedMovements,
} from '../reducers/movements.selectors';
import ProductItem from '../components/ProductItem';
import {Movement} from '../interfaces/movement.interface';
import {
  EarnedTotalButton,
  RedeemedTotalButton,
  TotalButton,
  FlatListContainer,
  Subtitle,
  CardMonth,
  CardPointsTotal,
  FullContainer,
  CardContainer,
  CardPadding,
  WelcomeText,
  WelcomeName,
  ButtonsContainer,
} from './Movements.styled';
import labels from '../constants/labels';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sumPoints} from '../utils/pointUtils';
import {filterByDate, monthNames} from '../../../common/utils/dateUtils';
import config from '../../../constants/config';

const Movements = () => {
  const dispatch = useAppDispatch();

  const [allMovements, setAllMovements] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentMovements, setCurrentMovements] = useState<Movement[]>([]);
  const movements = useSelector(selectMovements);
  const earnedMovements = useSelector(selectEarnedMovements);
  const redeemedMovements = useSelector(selectRedeemedMovements);

  const {height} = Dimensions.get('window');
  const styleHeight = {height: height / 2.5};

  const currentMonth = monthNames[Number(config.FILTER.MONTH) - 1];

  const totalPoints = sumPoints(earnedMovements) - sumPoints(redeemedMovements);
  const cardPoints =
    totalPoints.toLocaleString('es-MX') + ' ' + labels.CARD.POINTS;

  useEffect(() => {
    setLoading(true);
    dispatch(fetchMovementsData());
  }, []);

  useEffect(() => {
    if (movements.length) {
      const movementsFiltered = filterByDate(
        movements,
        config.FILTER.MONTH,
        config.FILTER.YEAR,
      );
      setCurrentMovements(movementsFiltered);
      dispatch(
        setEarnedMovements(
          movementsFiltered.filter(element => !element.is_redemption),
        ),
      );
      dispatch(
        setRedeemedMovements(
          movementsFiltered.filter(element => element.is_redemption),
        ),
      );
      setLoading(false);
    }
  }, [movements, dispatch]);

  const allMovementsPressed = () => {
    setCurrentMovements(
      filterByDate(movements, config.FILTER.MONTH, config.FILTER.YEAR),
    );
    setAllMovements(true);
  };

  const filterMovementsPressed = (flag: Boolean) => {
    let filteredMovements: Movement[] | null = [];
    flag
      ? (filteredMovements = earnedMovements)
      : (filteredMovements = redeemedMovements);
    setCurrentMovements(filteredMovements);
    setAllMovements(false);
  };

  const renderFilterButtons = () => {
    return (
      <Box>
        <HStack space={2} justifyContent="center">
          <EarnedTotalButton
            testID="earned-points-button"
            bgColor="primary.100"
            _text={{
              fontSize: 12,
              fontWeight: 800,
              color: 'white',
              lineHeight: 16,
            }}
            onPress={() => filterMovementsPressed(true)}>
            {labels.BUTTONS.EARNED}
          </EarnedTotalButton>
          <RedeemedTotalButton
            testID="redeemed-points-button"
            bgColor="primary.100"
            _text={{
              fontSize: 12,
              fontWeight: 800,
              color: 'white',
              lineHeight: 16,
            }}
            onPress={() => filterMovementsPressed(false)}>
            {labels.BUTTONS.REDEEMED}
          </RedeemedTotalButton>
        </HStack>
      </Box>
    );
  };

  const renderSingleButton = () => (
    <>
      <VStack>
        <TotalButton
          testID="total-points-button"
          bgColor="primary.100"
          _text={{
            fontSize: 16,
            fontWeight: 800,
            color: 'white',
            lineHeight: 22,
          }}
          onPress={() => allMovementsPressed()}>
          {labels.BUTTONS.ALL}
        </TotalButton>
      </VStack>
    </>
  );

  const renderMovementsList = () => (
    <FlatListContainer
      maxWidth="100%"
      bgColor={'white'}
      style={[styleHeight]}
      testID="movements-list-container">
      <FlatList
        data={currentMovements}
        renderItem={renderItem}
        keyExtractor={(item: Movement) => item.id.toString()}
      />
    </FlatListContainer>
  );

  const renderItem: ListRenderItem<Movement> = ({item}) => (
    <ProductItem movement={item} />
  );

  const renderLoadingList = () => (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading" />
      <Heading color="primary.100" fontSize="md">
        {labels.LOADING.TITLE}
      </Heading>
    </HStack>
  );

  const render = () => (
    <SafeAreaView>
      <FullContainer>
        <Box border="1" borderRadius="md">
          <VStack>
            <WelcomeText color="text.title">
              {labels.WELCOME.MESSAGE}
            </WelcomeText>
          </VStack>
          <VStack>
            <WelcomeName color="text.title">{labels.WELCOME.NAME}</WelcomeName>
          </VStack>
        </Box>
        <Box>
          <Subtitle color="text.subtitle">{labels.SUBTITLES.POINTS}</Subtitle>
          <CardPadding>
            <CardContainer
              alignSelf="center"
              bg="primary.100"
              shadow={9}
              width="100%">
              <VStack>
                <CardMonth>{currentMonth}</CardMonth>
              </VStack>
              <VStack>
                <CardPointsTotal alignSelf="center">
                  {cardPoints}
                </CardPointsTotal>
              </VStack>
            </CardContainer>
          </CardPadding>
        </Box>
        <Box>
          <Subtitle color="text.subtitle">
            {labels.SUBTITLES.MOVEMENTS}
          </Subtitle>
          {loading ? renderLoadingList() : renderMovementsList()}
        </Box>
        <ButtonsContainer>
          {allMovements ? renderFilterButtons() : renderSingleButton()}
        </ButtonsContainer>
      </FullContainer>
    </SafeAreaView>
  );

  return render();
};

export default Movements;
