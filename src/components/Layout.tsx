
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Bell, Settings, Shield, User, Moon, Sun, Activity } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Activity, current: location.pathname === '/dashboard' || location.pathname === '/' },
    { name: 'Threats', href: '/threats', icon: Shield, current: location.pathname === '/threats' },
    { name: 'Incidents', href: '/incidents', icon: Bell, current: location.pathname === '/incidents' },
    { name: 'Analytics', href: '/analytics', icon: Activity, current: location.pathname === '/analytics' },
    { name: 'Reports', href: '/reports', icon: Activity, current: location.pathname === '/reports' },
    { name: 'Settings', href: '/settings', icon: Settings, current: location.pathname === '/settings' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Top Navigation */}
        <nav className="bg-blue-900 dark:bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-white text-lg font-bold">CIDS Ghana</span>
                <span className="text-yellow-400 text-sm ml-2">Financial Security</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-green-600 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white text-sm">System Active</span>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="text-white hover:bg-blue-800"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                
                <div className="text-white text-sm">
                  <div className="font-medium">{user?.name}</div>
                  <div className="text-blue-200 text-xs">{user?.institution}</div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-white hover:bg-blue-800"
                >
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation */}
        <div className="bg-blue-800 dark:bg-gray-700 shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                    item.current
                      ? 'border-yellow-400 text-yellow-400'
                      : 'border-transparent text-blue-200 hover:text-white hover:border-blue-300'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
