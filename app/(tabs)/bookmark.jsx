import { View, Text } from 'react-native'
import React from 'react'

const bookmark = () => {
  return (
    <View>
      <Text>bookmark</Text>
    </View>
  )
}

export default bookmark

// import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
// import { router } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import EmptyState from '../../components/EmptyState';
// import useAppwrite from '../../lib/useAppwrite'
// import { useState } from 'react';
// import { Video, ResizeMode } from 'expo-av'
// import { icons } from '../../constants';
// import VideoCard from '../../components/VideoCard'
// import { getUserPosts, singOut } from '../../lib/appwrite';
// import InfoBox from '../../components/InfoBox'
// import { useGlobalContext } from '../../context/GlobalProvider';
// import { ScrollView } from 'react-native';
// import { FormField } from '../../components/FormField'

// const Profile = () => {
//   const { user, setUser, setIsLoggedIn } = useGlobalContext();
//   // const [form, setForm] = useState(false)({
    
//   // })

//   const { data: posts } = useAppwrite(
//     () => getUserPosts(user.$id)
//   );
//   }
 
//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <FlatList/>
//        ListHeaderComponent={() => (
//         <View className="my-6 px-4 space-y-3">
//           <View className="justify-between items-start flex-row mb-2">
//             <View>
//               <Text className="font-pmedium text-sm text-gray-100">
//                 Welcome Back,
//               </Text>
//               <Text className="text-2xl font-psemibold text-red-700">
//                 {user?.username}
//               </Text>
//             </View>

//             <View className="mt-1.5">
//               <Image 
//               source={images.logoSmall}
//               className="w-9 h-10"
//               resizeMethod='contain'
//               />
//             </View>
//           </View>
//     <ScrollView className="px-4 my-6">
//       <Text className="text-2xl text-white font-psemibold">
//         Saved Videos
//       </Text>

//       <FormField 
//       title="Video Title"
//       value={form.title}
//       placeholder="Search your saved videos"
//       handleChangeText={(e) => setForm({ ...form, title: e})}
//       otherStyles="mt-10"
//       />


//     </ScrollView>
//   </SafeAreaView>
//   );
// };

// export default Profile;