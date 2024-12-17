import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../api';

interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  orders?: Order[];
}

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  _id: string;
  orderItems: OrderItem[];
  totalPrice: number;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching user data
    const mockUsers = {
      'testuser1@example.com': {
        _id: 'testuser1',
        name: 'Test User 1',
        email: 'testuser1@example.com',
        isAdmin: false,
        orders: [
          {
            _id: 'order1',
            orderItems: [
              {
                id: 'lr1',
                name: 'Modern Comfort Sofa',
                quantity: 1,
                price: 1299.99,
                image: '/images/products/living-room/sofa-1.jpg',
              },
            ],
            totalPrice: 1299.99,
            createdAt: '2024-03-01T12:00:00Z',
          },
          {
            _id: 'order2',
            orderItems: [
              {
                id: 'lr2',
                name: 'Minimalist Coffee Table',
                quantity: 2,
                price: 449.99,
                image: '/images/products/living-room/table-1.jpg',
              },
            ],
            totalPrice: 899.98,
            createdAt: '2024-03-05T12:00:00Z',
          },
        ],
      },
      'testuser2@example.com': {
        _id: 'testuser2',
        name: 'Test User 2',
        email: 'testuser2@example.com',
        isAdmin: false,
        orders: [],
      },
    };

    const token = localStorage.getItem('token');
    if (token) {
      const userEmail = token;
      const fetchedUser = mockUsers[userEmail] || null;
      setUser(fetchedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login
    const mockUsers = {
      'testuser1@example.com': { /* ... */ },
      'testuser2@example.com': { /* ... */ },
    };

    if (mockUsers[email]) {
      localStorage.setItem('token', email);
      setUser(mockUsers[email]);
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        loading, 
        error, 
        login, 
        register: async () => {},
        logout, 
        forgotPassword: async () => {}
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 