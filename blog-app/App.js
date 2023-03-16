import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexPage from './pages/IndexPage';
import BlogPage from './pages/BlogPage';

 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Index" component={IndexPage} options={{headerShown:false}}/>
     <Stack.Screen name="BlogPage" component={BlogPage} options={{ headerShown: false }} />
    </Stack.Navigator>
   </NavigationContainer>
    
  );
 }