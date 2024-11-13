import { useState, useEffect } from 'react';

const mockPosts = [
  {
    id: 1,
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
    ],
    data: '2024-11-02',
  },
  {
    id: 2,
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/3.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/4.jpg' },
    ],
    data: '2024-11-02',
  },
  {
    id: 3,
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/6.jpg' },
    ],
    data: '2024-11-02',
  },
  {
    id: 4,
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/7.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
    ],
    data: '2024-11-02',
  },
  {
    id: 5,
    img: 'https://picsum.photos/800/450?random=5',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/3.jpg' },
    ],
    data: '2024-11-02',
  },
  {
    id: 6,
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description: 'Our latest engineering tools are designed to streamline workflows and boost productivity...',
    authors: [
      { name: 'Remy Sharp', avatar: 'https://mui.com/static/images/avatar/4.jpg' },
      { name: 'Travis Howard', avatar: 'https://mui.com/static/images/avatar/5.jpg' },
    ],
    data: '2024-11-02',
  },
]

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // const [selectedCategory, setSelectedCategory] = useState('All categories')
  // const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    //実際のAPIが実装されるまではモックデータを使用する
    const fetchPosts = async () => {
      try {
        // APIの実装後は以下のようにデータを取得
        // const response = await fetch('/api/posts')
        // const data = await response.json()

        setPosts(mockPosts)
        setLoading(false)
        console.log({ posts, loading, error });
      }catch (err) {
        setError('記事の取得に失敗しました')
        setLoading(false)
      }
    }
    fetchPosts()
  }, [posts, loading, error])

  return {
    posts,
    loading,
    error,
  }
}