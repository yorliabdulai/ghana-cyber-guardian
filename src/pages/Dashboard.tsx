
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Clock, TrendingUp, MapPin, Activity } from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [threats, setThreats] = useState([
    {
      id: 1,
      type: 'SIM Swap Fraud',
      severity: 'critical',
      location: 'Accra',
      institution: 'MTN Mobile Money',
      amount: 'GHS 50,000',
      time: '2 minutes ago',
      status: 'active'
    },
    {
      id: 2,
      type: 'Phishing Campaign',
      severity: 'high',
      location: 'Kumasi',
      institution: 'GCB Bank',
      amount: '245 emails detected',
      time: '5 minutes ago',
      status: 'investigating'
    },
    {
      id: 3,
      type: 'DDoS Attack',
      severity: 'high',
      location: 'Accra',
      institution: 'Fidelity Bank',
      amount: '400% traffic spike',
      time: '8 minutes ago',
      status: 'mitigated'
    },
    {
      id: 4,
      type: 'Malware Detection',
      severity: 'medium',
      location: 'Tamale',
      institution: 'AirtelTigo Money',
      amount: 'Banking Trojan',
      time: '12 minutes ago',
      status: 'contained'
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'destructive';
      case 'investigating': return 'default';
      case 'mitigated': return 'secondary';
      case 'contained': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Cybersecurity Operations Center
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Ghana Financial Sector - {currentTime.toLocaleString('en-GB', { timeZone: 'GMT' })} GMT
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentTime.toLocaleTimeString('en-GB', { timeZone: 'GMT' })}
            </div>
            <div className="text-sm text-gray-500">Accra Time (GMT)</div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Threats Detected Today</CardTitle>
              <Shield className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs opacity-80">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
              <AlertTriangle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs opacity-80">4 critical, 4 high priority</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2m</div>
              <p className="text-xs opacity-80">-15% improvement</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-xs opacity-80">30-day average</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Threat Feed */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-red-500" />
                  Live Threat Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {threats.map((threat) => (
                    <Alert key={threat.id} className="border-l-4" style={{ borderLeftColor: getSeverityColor(threat.severity).replace('bg-', '#') }}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold">{threat.type}</span>
                              <Badge variant={getStatusColor(threat.status)}>{threat.status}</Badge>
                              <Badge variant="outline" className={`${getSeverityColor(threat.severity)} text-white`}>
                                {threat.severity}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {threat.location} - {threat.institution}
                              </span>
                              <div className="mt-1">
                                <strong>Impact:</strong> {threat.amount}
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {threat.time}
                          </div>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ghana Threat Map & System Status */}
          <div className="space-y-6">
            {/* Threat Hotspots */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  Ghana Threat Hotspots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-red-50 dark:bg-red-900/20 rounded">
                    <span className="font-medium">Accra</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">156 threats</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                    <span className="font-medium">Kumasi</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">89 threats</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                    <span className="font-medium">Tamale</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">34 threats</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                    <span className="font-medium">Cape Coast</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">12 threats</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Detection Engine</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mobile Money Monitor</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Banking Systems</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-sm text-yellow-600">Monitoring</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Alert System</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-600">Online</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Financial Institutions Status */}
        <Card>
          <CardHeader>
            <CardTitle>Protected Financial Institutions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'GCB Bank Ghana', status: 'protected', threats: 45, color: 'green' },
                { name: 'MTN Mobile Money', status: 'monitoring', threats: 67, color: 'yellow' },
                { name: 'Fidelity Bank', status: 'protected', threats: 23, color: 'green' },
                { name: 'Ecobank Ghana', status: 'protected', threats: 34, color: 'green' },
                { name: 'AirtelTigo Money', status: 'alert', threats: 78, color: 'red' },
                { name: 'Vodafone Cash', status: 'protected', threats: 29, color: 'green' },
                { name: 'Stanbic Bank', status: 'protected', threats: 18, color: 'green' },
                { name: 'Absa Bank Ghana', status: 'monitoring', threats: 41, color: 'yellow' }
              ].map((institution, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{institution.name}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      institution.color === 'green' ? 'bg-green-500' :
                      institution.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                    } ${institution.color === 'green' ? 'animate-pulse' : ''}`}></div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    Status: {institution.status}
                  </div>
                  <div className="text-xs text-gray-500">
                    {institution.threats} threats blocked today
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
