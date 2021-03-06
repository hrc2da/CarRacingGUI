export const CAR_LEN_DEFAULT = 100;
export const CAR_WIDTH_DEFAULT = 50;

const carConfig = (state={}, action) =>{
	switch(action.type){
    case 'SET_WHEEL_SIZE':
      return {...state, wheelSize: action.value}; 
    case 'SET_MATERIAL':
      return {...state, material: action.value}; 
    case 'SET_ENGINE':
      return {...state, engine: action.value};
    case 'SET_BODY':
      let shape = [];
      switch(action.value){
        case 'rect':
          shape = [[0,0],[CAR_LEN_DEFAULT,0],[CAR_LEN_DEFAULT, CAR_WIDTH_DEFAULT],[CAR_WIDTH_DEFAULT,0]];
          break;
        case 'triangle':
          shape = [[0,0],[CAR_LEN_DEFAULT,CAR_WIDTH_DEFAULT/2],[CAR_WIDTH_DEFAULT,0]]
          break;
        default:
          break;
      }
      return {...state, body: shape};
    case 'SET_DRIVETRAIN':
      return{...state, drivetrain: action.value};
    case 'SET_WHEEL_DIST':
      return {...state, wheelDistance: action.value};

      
    case 'CLEAR_WHEEL_SIZE':
      return {...state, wheelSize : undefined};
    case 'CLEAR_MATERIAL':
      return {...state, material : undefined};
    case 'CLEAR_ENGINE':
      return {...state, engine : undefined};
    case 'CLEAR_BODY':
      return {...state, body : undefined};
    case 'CLEAR_DRIVETRAIN':
      return {...state, drivetrain : undefined};
    case 'CLEAR_WHEEL_DIST':
      return {...state, drivetrain : undefined};
    default:
			return state;
	}

}

export default carConfig;
