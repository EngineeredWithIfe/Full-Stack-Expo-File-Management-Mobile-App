import { View, Text, FlatList, Image, RefreshControlComponent, RefreshControl, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import { getAllPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import VideoCard from '../../components/VideoCard';
import { getLatestPosts } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalProvider';

const Home = () => {
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }


  return (
    <SafeAreaView className="bg-primary">
      <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <VideoCard video={item} 
        />
      )}
      ListHeaderComponent={() => (
        <View className="my-6 px-4 space-y-3">
          <View className="justify-between items-start flex-row mb-2">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Welcome Back,
              </Text>
              <Text className="text-2xl font-psemibold text-red-700">
                {user?.username}
              </Text>
            </View>

            <View className="mt-1.5">
              <Image 
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMethod='contain'
              />
            </View>
          </View>

          <SearchInput />

          <View className="w-full flex-1 pt-5 pt-8">
            <Text className="text-lg font-pregular text-gray-100 mb-3">
              Latest Videos
            </Text>

            <Trending posts={latestPosts ?? []} />
          </View>
        </View>
      )}
      ListEmptyComponent={() => (
        <EmptyState 
        title="No Videos found"
        subtitle="Be the first one to upload a video"
        />
      )}
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    />
    </SafeAreaView>
  );
};

export default Home;