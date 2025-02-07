import React from 'react';
import CreatePost from './components/CreatePost';
import PostsList from './components/PostsList';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">React Posts App</h1>
      <div className="space-y-6">
        <CreatePost />
        <PostsList />
      </div>
    </div>
  );
}

export default App;
