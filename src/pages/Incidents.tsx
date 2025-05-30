
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Plus, Clock, User, CheckCircle } from 'lucide-react';

const Incidents = () => {
  const [incidents, setIncidents] = useState([
    {
      id: 'INC-2024-001',
      title: 'MTN Mobile Money SIM Swap Attack',
      severity: 'critical',
      status: 'investigating',
      assignee: 'Kwame Asante',
      created: '2024-01-15T10:30:00Z',
      updated: '2024-01-15T11:15:00Z',
      description: 'Multiple SIM swap attempts detected targeting high-value MTN Mobile Money accounts',
      institution: 'MTN Ghana',
      impact: 'GHS 150,000 at risk',
      timeline: [
        { time: '10:30', action: 'Incident created', user: 'System' },
        { time: '10:32', action: 'Assigned to Kwame Asante', user: 'System' },
        { time: '10:45', action: 'Initial investigation started', user: 'Kwame Asante' },
        { time: '11:15', action: 'Contacted MTN security team', user: 'Kwame Asante' }
      ]
    },
    {
      id: 'INC-2024-002',
      title: 'GCB Bank Phishing Campaign',
      severity: 'high',
      status: 'in-progress',
      assignee: 'Ama Osei',
      created: '2024-01-15T09:45:00Z',
      updated: '2024-01-15T11:20:00Z',
      description: 'Large-scale phishing campaign targeting GCB Bank customers with fake login portal',
      institution: 'GCB Bank',
      impact: '245 customers targeted',
      timeline: [
        { time: '09:45', action: 'Phishing campaign detected', user: 'System' },
        { time: '09:47', action: 'Assigned to Ama Osei', user: 'System' },
        { time: '10:15', action: 'Malicious domains identified', user: 'Ama Osei' },
        { time: '11:20', action: 'Takedown requests submitted', user: 'Ama Osei' }
      ]
    },
    {
      id: 'INC-2024-003',
      title: 'Fidelity Bank DDoS Attack',
      severity: 'high',
      status: 'resolved',
      assignee: 'Kojo Mensah',
      created: '2024-01-15T08:30:00Z',
      updated: '2024-01-15T10:45:00Z',
      description: 'DDoS attack against Fidelity Bank online banking platform',
      institution: 'Fidelity Bank',
      impact: 'Service disruption for 2 hours',
      timeline: [
        { time: '08:30', action: 'DDoS attack detected', user: 'System' },
        { time: '08:32', action: 'Assigned to Kojo Mensah', user: 'System' },
        { time: '08:45', action: 'Mitigation rules applied', user: 'Kojo Mensah' },
        { time: '10:45', action: 'Attack mitigated, service restored', user: 'Kojo Mensah' }
      ]
    }
  ]);

  const [selectedIncident, setSelectedIncident] = useState(null);
  const [newIncident, setNewIncident] = useState({
    title: '',
    severity: '',
    institution: '',
    description: ''
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'resolved': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'closed': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const createIncident = () => {
    const incident = {
      id: `INC-2024-${String(incidents.length + 1).padStart(3, '0')}`,
      title: newIncident.title,
      severity: newIncident.severity,
      status: 'investigating',
      assignee: 'Unassigned',
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      description: newIncident.description,
      institution: newIncident.institution,
      impact: 'Under assessment',
      timeline: [
        { time: new Date().toLocaleTimeString(), action: 'Incident created', user: 'Kwame Asante' }
      ]
    };

    setIncidents([incident, ...incidents]);
    setNewIncident({ title: '', severity: '', institution: '', description: '' });
  };

  const statusCounts = {
    investigating: incidents.filter(i => i.status === 'investigating').length,
    'in-progress': incidents.filter(i => i.status === 'in-progress').length,
    resolved: incidents.filter(i => i.status === 'resolved').length,
    total: incidents.length
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Incident Response</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage and track cybersecurity incidents across financial institutions
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Incident
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Incident</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Incident title"
                  value={newIncident.title}
                  onChange={(e) => setNewIncident({...newIncident, title: e.target.value})}
                />
                
                <Select value={newIncident.severity} onValueChange={(value) => setNewIncident({...newIncident, severity: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={newIncident.institution} onValueChange={(value) => setNewIncident({...newIncident, institution: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select institution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GCB Bank">GCB Bank</SelectItem>
                    <SelectItem value="MTN Mobile Money">MTN Mobile Money</SelectItem>
                    <SelectItem value="Fidelity Bank">Fidelity Bank</SelectItem>
                    <SelectItem value="Ecobank Ghana">Ecobank Ghana</SelectItem>
                    <SelectItem value="AirtelTigo Money">AirtelTigo Money</SelectItem>
                    <SelectItem value="Vodafone Cash">Vodafone Cash</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea
                  placeholder="Describe the incident..."
                  value={newIncident.description}
                  onChange={(e) => setNewIncident({...newIncident, description: e.target.value})}
                />
                
                <Button onClick={createIncident} className="w-full">
                  Create Incident
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 font-medium">Total Incidents</p>
                  <p className="text-2xl font-bold">{statusCounts.total}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 font-medium">Investigating</p>
                  <p className="text-2xl font-bold">{statusCounts.investigating}</p>
                </div>
                <Clock className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-600 font-medium">In Progress</p>
                  <p className="text-2xl font-bold">{statusCounts['in-progress']}</p>
                </div>
                <User className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 font-medium">Resolved</p>
                  <p className="text-2xl font-bold">{statusCounts.resolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Incidents List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Active Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidents.map((incident) => (
                    <div 
                      key={incident.id} 
                      className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => setSelectedIncident(incident)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            incident.severity === 'critical' ? 'bg-red-500' :
                            incident.severity === 'high' ? 'bg-orange-500' :
                            incident.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div>
                            <h3 className="font-semibold">{incident.id}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{incident.title}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Badge variant={getSeverityColor(incident.severity)}>{incident.severity}</Badge>
                          <Badge className={getStatusColor(incident.status)}>{incident.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Institution:</span> {incident.institution}
                        </div>
                        <div>
                          <span className="font-medium">Assignee:</span> {incident.assignee}
                        </div>
                        <div>
                          <span className="font-medium">Impact:</span> {incident.impact}
                        </div>
                        <div>
                          <span className="font-medium">Updated:</span> {new Date(incident.updated).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Incident Details */}
          <div>
            {selectedIncident ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{selectedIncident.id}</span>
                    <Badge className={getStatusColor(selectedIncident.status)}>
                      {selectedIncident.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedIncident.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Severity:</span>
                          <Badge variant={getSeverityColor(selectedIncident.severity)}>
                            {selectedIncident.severity}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Assignee:</span>
                          <span>{selectedIncident.assignee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Created:</span>
                          <span>{new Date(selectedIncident.created).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Impact:</span>
                          <span>{selectedIncident.impact}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Timeline</h4>
                      <div className="space-y-2">
                        {selectedIncident.timeline.map((entry, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-12 text-gray-500">{entry.time}</div>
                            <div className="flex-1">
                              <div>{entry.action}</div>
                              <div className="text-gray-500">by {entry.user}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full" size="sm">Update Status</Button>
                      <Button className="w-full" variant="outline" size="sm">Add Comment</Button>
                      <Button className="w-full" variant="outline" size="sm">Escalate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Select an incident to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Incidents;
