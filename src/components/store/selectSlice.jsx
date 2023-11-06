const SELECT_REGION = "SELECT_REGION";
const SELECT_TRANSPORT = "SELECT_TRANSPORT";
const SELECT_FOOD = "SELECT_FOOD";
const SELECT_ACTIVITY = "SELECT_ACTIVITY";
const RESET_STATE = "RESET_STATE";

export const selectRegion = (payload) => ({
  type: SELECT_REGION,
  payload,
});

export const selectTransport = (payload) => ({
  type: SELECT_TRANSPORT,
  payload,
});

export const selectFood = (payload) => ({
  type: SELECT_FOOD,
  payload,
});

export const selectActivity = (payload) => ({
  type: SELECT_ACTIVITY,
  payload,
});

export const resetState = (payload) => ({
  type: RESET_STATE,
  payload,
});

const initialState = {
  selectedRegions: [],
  selectedTransports: [],
  selectedFoods: [],
  selectedActivities: [],
};

const select = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REGION:
      const region = action.payload;
      if (state.selectedRegions.includes(region)) {
        // 이미 선택된 지역일 경우 선택 해제
        return {
          ...state,
          selectedRegions: state.selectedRegions.filter((r) => r !== region),
        };
      } else {
        // 선택되지 않은 지역일 경우 선택
        return {
          ...state,
          selectedRegions: [...state.selectedRegions, region],
        };
      }
    case SELECT_TRANSPORT:
      const transport = action.payload;
      if (state.selectedTransports.includes(transport)) {
        return {
          ...state,
          selectedTransports: state.selectedTransports.filter(
            (r) => r !== transport
          ),
        };
      } else {
        return {
          ...state,
          selectedTransports: [...state.selectedTransports, transport],
        };
      }
    case SELECT_FOOD:
      const food = action.payload;
      if (state.selectedFoods.includes(food)) {
        return {
          ...state,
          selectedFoods: state.selectedFoods.filter((r) => r !== food),
        };
      } else {
        return {
          ...state,
          selectedFoods: [...state.selectedFoods, food],
        };
      }
    case SELECT_ACTIVITY:
      const activity = action.payload;
      if (state.selectedActivities.includes(activity)) {
        return {
          ...state,
          selectedActivities: state.selectedActivities.filter(
            (r) => r !== activity
          ),
        };
      } else {
        return {
          ...state,
          selectedActivities: [...state.selectedActivities, activity],
        };
      }
    case RESET_STATE:
      return {
        ...state,
        selectedRegions: [],
        selectedTransports: [],
        selectedFoods: [],
        selectedActivities: [],
      };
    default:
      return state;
  }
};

export default select;
