
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Settings as SettingsIcon, Users, Bell, Shield, Database, Activity } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    criticalOnly: false
  });

  const [thresholds, setThresholds] = useState({
    criticalThreshold: 85,
    highThreshold: 70,
    mediumThreshold: 50,
    responseTimeLimit: 300
  });

  const users = [
    {
      id: 1,
      name: 'Kwame Asante',
      email: 'kwame.asante@gcb.com.gh',
      role: 'admin',
      institution: 'GCB Bank Ghana',
      lastLogin: '2024-01-15T10:30:00Z',
      status: 'active'
    },
    {
      id: 2,
      name: 'Ama Osei',
      email: 'ama.osei@mtn.com.gh',
      role: 'analyst',
      institution: 'MTN Ghana',
      lastLogin: '2024-01-15T09:45:00Z',
      status: 'active'
    },
    {
      id: 3,
      name: 'Kojo Mensah',
      email: 'kojo.mensah@fidelitybank.com.gh',
      role: 'analyst',
      institution: 'Fidelity Bank',
      lastLogin: '2024-01-14T16:20:00Z',
      status: 'active'
    },
    {
      id: 4,
      name: 'Akosua Boateng',
      email: 'akosua.boateng@ecobank.com.gh',
      role: 'viewer',
      institution: 'Ecobank Ghana',
      lastLogin: '2024-01-12T14:15:00Z',
      status: 'inactive'
    }
  ];

  const institutions = [
    {
      name: 'GCB Bank Ghana',
      type: 'Commercial Bank',
      status: 'active',
      endpoints: 12,
      lastSync: '2024-01-15T11:30:00Z'
    },
    {
      name: 'MTN Mobile Money',
      type: 'Mobile Money',
      status: 'active',
      endpoints: 8,
      lastSync: '2024-01-15T11:28:00Z'
    },
    {
      name: 'Fidelity Bank',
      type: 'Commercial Bank',
      status: 'active',
      endpoints: 10,
      lastSync: '2024-01-15T11:25:00Z'
    },
    {
      name: 'AirtelTigo Money',
      type: 'Mobile Money',
      status: 'warning',
      endpoints: 6,
      lastSync: '2024-01-15T10:45:00Z'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'analyst': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'viewer': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'inactive': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">System Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Configure system preferences, user access, and security parameters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alert & Notification Settings */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Alert & Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-500">Receive alerts via email</div>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">SMS Alerts</div>
                      <div className="text-sm text-gray-500">Critical alerts via SMS</div>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-gray-500">Browser notifications</div>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Critical Only Mode</div>
                      <div className="text-sm text-gray-500">Only receive critical alerts</div>
                    </div>
                    <Switch
                      checked={notifications.criticalOnly}
                      onCheckedChange={(checked) => setNotifications({...notifications, criticalOnly: checked})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Detection Thresholds</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Critical Threshold (%)</label>
                    <Input
                      type="number"
                      value={thresholds.criticalThreshold}
                      onChange={(e) => setThresholds({...thresholds, criticalThreshold: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">High Threshold (%)</label>
                    <Input
                      type="number"
                      value={thresholds.highThreshold}
                      onChange={(e) => setThresholds({...thresholds, highThreshold: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Medium Threshold (%)</label>
                    <Input
                      type="number"
                      value={thresholds.mediumThreshold}
                      onChange={(e) => setThresholds({...thresholds, mediumThreshold: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Response Time Limit (seconds)</label>
                    <Input
                      type="number"
                      value={thresholds.responseTimeLimit}
                      onChange={(e) => setThresholds({...thresholds, responseTimeLimit: parseInt(e.target.value)})}
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button>Save Settings</Button>
                <Button variant="outline">Reset to Defaults</Button>
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Database Connection</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Detection Engine</span>
                  <Badge className="bg-green-100 text-green-800">Running</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Alert System</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">API Gateway</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Degraded</Badge>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>CPU Usage:</span>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Memory Usage:</span>
                      <span>67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Disk Usage:</span>
                      <span>23%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network I/O:</span>
                      <span>Normal</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                User Management
              </div>
              <Button size="sm">Add User</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Role</th>
                    <th className="text-left py-2">Institution</th>
                    <th className="text-left py-2">Last Login</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b">
                      <td className="py-3">{user.name}</td>
                      <td className="py-3">{user.email}</td>
                      <td className="py-3">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      </td>
                      <td className="py-3">{user.institution}</td>
                      <td className="py-3">{new Date(user.lastLogin).toLocaleDateString()}</td>
                      <td className="py-3">
                        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      </td>
                      <td className="py-3">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">Disable</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Institution Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                Connected Institutions
              </div>
              <Button size="sm">Add Institution</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {institutions.map((institution, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{institution.name}</h3>
                    <Badge className={getStatusColor(institution.status)}>{institution.status}</Badge>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <div>Type: {institution.type}</div>
                    <div>Endpoints: {institution.endpoints}</div>
                    <div>Last Sync: {new Date(institution.lastSync).toLocaleString()}</div>
                  </div>
                  
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">Configure</Button>
                    <Button size="sm" variant="outline">Test Connection</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Authentication Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Multi-Factor Authentication</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Session Timeout (minutes)</span>
                    <Input type="number" defaultValue="30" className="w-20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Password Complexity</span>
                    <Select defaultValue="high">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Data Protection</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Encryption</span>
                    <Switch defaultChecked disabled />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Audit Logging</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Retention (days)</span>
                    <Input type="number" defaultValue="365" className="w-20" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
