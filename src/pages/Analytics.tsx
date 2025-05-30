
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Shield, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  const weeklyThreatData = [
    { day: 'Mon', threats: 45, incidents: 8, resolved: 6 },
    { day: 'Tue', threats: 52, incidents: 12, resolved: 10 },
    { day: 'Wed', threats: 38, incidents: 6, resolved: 5 },
    { day: 'Thu', threats: 67, incidents: 15, resolved: 12 },
    { day: 'Fri', threats: 89, incidents: 18, resolved: 16 },
    { day: 'Sat', threats: 34, incidents: 4, resolved: 4 },
    { day: 'Sun', threats: 28, incidents: 3, resolved: 3 }
  ];

  const threatTypeData = [
    { name: 'Phishing', value: 35, color: '#ef4444' },
    { name: 'SIM Swap', value: 25, color: '#f97316' },
    { name: 'DDoS', value: 15, color: '#eab308' },
    { name: 'Malware', value: 12, color: '#22c55e' },
    { name: 'Insider', value: 8, color: '#3b82f6' },
    { name: 'Other', value: 5, color: '#6b7280' }
  ];

  const institutionData = [
    { name: 'MTN Mobile Money', threats: 89, prevented: 85, rate: 95.5 },
    { name: 'GCB Bank', threats: 67, prevented: 65, rate: 97.0 },
    { name: 'Fidelity Bank', threats: 45, prevented: 44, rate: 97.8 },
    { name: 'Ecobank Ghana', threats: 56, prevented: 53, rate: 94.6 },
    { name: 'AirtelTigo Money', threats: 78, prevented: 72, rate: 92.3 },
    { name: 'Vodafone Cash', threats: 34, prevented: 33, rate: 97.1 }
  ];

  const responseTimeData = [
    { hour: '00:00', avgTime: 4.2 },
    { hour: '04:00', avgTime: 3.8 },
    { hour: '08:00', avgTime: 5.1 },
    { hour: '12:00', avgTime: 6.2 },
    { hour: '16:00', avgTime: 5.8 },
    { hour: '20:00', avgTime: 4.9 }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Security Analytics</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive analysis of cybersecurity trends and performance metrics
          </p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Detection Rate</p>
                  <p className="text-2xl font-bold text-green-600">96.2%</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +2.1% from last month
                  </div>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">False Positives</p>
                  <p className="text-2xl font-bold text-blue-600">3.8%</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -0.5% improvement
                  </div>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Avg Response Time</p>
                  <p className="text-2xl font-bold text-purple-600">4.2min</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -15% faster
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Prevented Losses</p>
                  <p className="text-2xl font-bold text-orange-600">GHS 2.4M</p>
                  <div className="flex items-center text-sm text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    This month
                  </div>
                </div>
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Threat Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Threat Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyThreatData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="threats" fill="#ef4444" name="Threats Detected" />
                  <Bar dataKey="incidents" fill="#f97316" name="Incidents Created" />
                  <Bar dataKey="resolved" fill="#22c55e" name="Incidents Resolved" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Threat Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Threat Types Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={threatTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {threatTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Response Time Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Average Response Time (24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="avgTime" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Response Time (minutes)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Institution Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Institution Protection Rates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {institutionData.map((institution, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{institution.name}</span>
                      <span className="text-gray-600">{institution.rate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${institution.rate}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{institution.prevented}/{institution.threats} threats prevented</span>
                      <span>{institution.threats - institution.prevented} breached</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Threat Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Greater Accra</h3>
                <p className="text-2xl font-bold text-red-600">156</p>
                <p className="text-sm text-gray-600">threats detected</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Primary: SIM Swap (45%)</div>
                  <div className="text-xs text-gray-500">Risk Level: High</div>
                </div>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Ashanti</h3>
                <p className="text-2xl font-bold text-orange-600">89</p>
                <p className="text-sm text-gray-600">threats detected</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Primary: Phishing (52%)</div>
                  <div className="text-xs text-gray-500">Risk Level: Medium</div>
                </div>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Northern</h3>
                <p className="text-2xl font-bold text-yellow-600">34</p>
                <p className="text-sm text-gray-600">threats detected</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Primary: Malware (38%)</div>
                  <div className="text-xs text-gray-500">Risk Level: Low</div>
                </div>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">Central</h3>
                <p className="text-2xl font-bold text-green-600">12</p>
                <p className="text-sm text-gray-600">threats detected</p>
                <div className="mt-2">
                  <div className="text-xs text-gray-500">Primary: Social Eng. (33%)</div>
                  <div className="text-xs text-gray-500">Risk Level: Low</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
