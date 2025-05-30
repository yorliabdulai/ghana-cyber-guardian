
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Bell, Settings, Shield, User, Moon, Sun, Activity, Play, Pause, RotateCcw } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [academicMode, setAcademicMode] = React.useState('demo');
  const [demoRunning, setDemoRunning] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Activity, current: location.pathname === '/dashboard' || location.pathname === '/' },
    { name: 'Threats', href: '/threats', icon: Shield, current: location.pathname === '/threats' },
    { name: 'Incidents', href: '/incidents', icon: Bell, current: location.pathname === '/incidents' },
    { name: 'Analytics', href: '/analytics', icon: Activity, current: location.pathname === '/analytics' },
    { name: 'Reports', href: '/reports', icon: Activity, current: location.pathname === '/reports' },
    { name: 'Research', href: '/research', icon: Activity, current: location.pathname === '/research' },
    { name: 'Settings', href: '/settings', icon: Settings, current: location.pathname === '/settings' },
  ];

  const handleRunDemo = () => {
    setDemoRunning(true);
    // Simulate a 10-minute demo
    setTimeout(() => setDemoRunning(false), 600000);
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'live': return 'bg-red-500';
      case 'demo': return 'bg-blue-500';
      case 'simulation': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        {/* Academic Header */}
        <div className="bg-blue-50 dark:bg-gray-800 border-b px-4 py-2">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div>
              <span className="font-semibold text-blue-800 dark:text-blue-300">
                Context-Aware IDS for Ghana's Financial Sector
              </span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">
                Final Year Project 2024/25 - University Research
              </span>
            </div>
            <Badge variant="outline" className="text-xs">
              ⚠️ Academic Simulation - Synthetic Data Only
            </Badge>
          </div>
        </div>

        {/* Top Navigation */}
        <nav className="bg-blue-900 dark:bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-yellow-400 mr-3" />
                <span className="text-white text-lg font-bold">CIDS Ghana</span>
                <span className="text-yellow-400 text-sm ml-2">Academic Research</span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Academic Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Mode:</span>
                  <Select value={academicMode} onValueChange={setAcademicMode}>
                    <SelectTrigger className="w-32 h-8 bg-blue-800 text-white border-blue-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demo Mode</SelectItem>
                      <SelectItem value="simulation">Simulation</SelectItem>
                      <SelectItem value="live">Live Mode</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className={`w-2 h-2 rounded-full ${getModeColor(academicMode)} animate-pulse`}></div>
                </div>

                {/* Quick Demo Button */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={demoRunning ? () => setDemoRunning(false) : handleRunDemo}
                  className="text-white border-yellow-400 hover:bg-yellow-400 hover:text-blue-900"
                >
                  {demoRunning ? (
                    <>
                      <Pause className="h-4 w-4 mr-1" />
                      Stop Demo
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-1" />
                      Run Demo
                    </>
                  )}
                </Button>

                <div className="flex items-center bg-green-600 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-white text-sm">
                    {academicMode === 'demo' ? 'Demo Active' : 'System Active'}
                  </span>
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
                  <div className="text-blue-200 text-xs">Researcher</div>
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

        {/* Demo Running Banner */}
        {demoRunning && (
          <div className="bg-yellow-400 text-yellow-900 px-4 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center">
                <Play className="h-4 w-4 mr-2 animate-pulse" />
                <span className="font-medium">Academic Demonstration Running</span>
                <span className="ml-2 text-sm">Showcasing threat detection scenarios...</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDemoRunning(false)}
                className="text-yellow-900 hover:bg-yellow-300"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        )}

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

        {/* Academic Footer */}
        <footer className="bg-gray-50 dark:bg-gray-800 border-t px-4 py-3">
          <div className="max-w-7xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-center items-center space-x-4">
              <span>Academic Research Environment</span>
              <span>•</span>
              <span>Simulated Financial Data</span>
              <span>•</span>
              <span>Dataset Sources: Synthetic Generation, Academic Literature</span>
              <span>•</span>
              <span>Mode: {academicMode.toUpperCase()}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
