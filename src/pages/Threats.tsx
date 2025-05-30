
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Search, Filter, Shield, Clock, MapPin } from 'lucide-react';

const Threats = () => {
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const threatData = [
    {
      id: 1,
      type: 'SIM Swap Fraud',
      severity: 'critical',
      institution: 'MTN Mobile Money',
      location: 'Accra',
      timestamp: '2024-01-15T10:30:00Z',
      description: 'Attempted SIM swap targeting customer with high-value mobile money account',
      amount: 'GHS 50,000',
      status: 'active',
      source_ip: '192.168.1.100',
      target: '+233241234567'
    },
    {
      id: 2,
      type: 'Phishing Campaign',
      severity: 'high',
      institution: 'GCB Bank',
      location: 'Kumasi',
      timestamp: '2024-01-15T10:25:00Z',
      description: 'Mass phishing emails impersonating GCB Bank login portal',
      amount: '245 emails detected',
      status: 'investigating',
      source_ip: '45.123.45.67',
      target: 'Multiple customers'
    },
    {
      id: 3,
      type: 'DDoS Attack',
      severity: 'high',
      institution: 'Fidelity Bank',
      location: 'Accra',
      timestamp: '2024-01-15T10:22:00Z',
      description: 'Distributed denial of service attack on online banking platform',
      amount: '400% traffic spike',
      status: 'mitigated',
      source_ip: 'Multiple IPs',
      target: 'fidelitybank.com.gh'
    },
    {
      id: 4,
      type: 'Malware Detection',
      severity: 'medium',
      institution: 'AirtelTigo Money',
      location: 'Tamale',
      timestamp: '2024-01-15T10:18:00Z',
      description: 'Banking trojan detected on customer device attempting credential theft',
      amount: 'Single device',
      status: 'contained',
      source_ip: '10.0.0.45',
      target: 'Customer device'
    },
    {
      id: 5,
      type: 'Insider Threat',
      severity: 'high',
      institution: 'Ecobank Ghana',
      location: 'Accra',
      timestamp: '2024-01-15T10:15:00Z',
      description: 'Unusual data access pattern detected from privileged user account',
      amount: '500+ customer records',
      status: 'investigating',
      source_ip: 'Internal network',
      target: 'Customer database'
    },
    {
      id: 6,
      type: 'Social Engineering',
      severity: 'medium',
      institution: 'Vodafone Cash',
      location: 'Cape Coast',
      timestamp: '2024-01-15T10:10:00Z',
      description: 'Phone calls impersonating bank staff requesting PIN codes',
      amount: '12 attempted calls',
      status: 'blocked',
      source_ip: 'N/A',
      target: 'Multiple customers'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'investigating': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'mitigated': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'contained': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'blocked': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredThreats = threatData.filter(threat => {
    const matchesSeverity = filterSeverity === 'all' || threat.severity === filterSeverity;
    const matchesType = filterType === 'all' || threat.type.toLowerCase().includes(filterType.toLowerCase());
    const matchesSearch = searchTerm === '' || 
      threat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSeverity && matchesType && matchesSearch;
  });

  const threatTypes = ['SIM Swap', 'Phishing', 'DDoS', 'Malware', 'Insider', 'Social Engineering'];
  const severityStats = {
    critical: threatData.filter(t => t.severity === 'critical').length,
    high: threatData.filter(t => t.severity === 'high').length,
    medium: threatData.filter(t => t.severity === 'medium').length,
    low: threatData.filter(t => t.severity === 'low').length
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Threat Detection</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor and analyze cybersecurity threats across Ghana's financial sector
            </p>
          </div>
        </div>

        {/* Threat Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 font-medium">Critical Threats</p>
                  <p className="text-2xl font-bold">{severityStats.critical}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 font-medium">High Priority</p>
                  <p className="text-2xl font-bold">{severityStats.high}</p>
                </div>
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 font-medium">Medium Risk</p>
                  <p className="text-2xl font-bold">{severityStats.medium}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 font-medium">Low Risk</p>
                  <p className="text-2xl font-bold">{severityStats.low}</p>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Threats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search threats, institutions, locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Threat Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {threatTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Threats List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Threats ({filteredThreats.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredThreats.map((threat) => (
                <div key={threat.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        threat.severity === 'critical' ? 'bg-red-500' :
                        threat.severity === 'high' ? 'bg-orange-500' :
                        threat.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <h3 className="text-lg font-semibold">{threat.type}</h3>
                      <Badge variant={getSeverityColor(threat.severity)}>{threat.severity}</Badge>
                      <Badge className={getStatusColor(threat.status)}>{threat.status}</Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(threat.timestamp).toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Institution:</span>
                      <p className="text-sm">{threat.institution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        Location:
                      </span>
                      <p className="text-sm">{threat.location}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Impact:</span>
                      <p className="text-sm">{threat.amount}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Source:</span>
                      <p className="text-sm font-mono">{threat.source_ip}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{threat.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium">Target:</span> {threat.target}
                    </div>
                    <div className="space-x-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="default">Investigate</Button>
                    </div>
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

export default Threats;
