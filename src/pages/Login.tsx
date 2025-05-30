
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, User, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Login successful! Welcome to CIDS Ghana');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoCredentials = [
    { role: 'System Administrator', email: 'admin@cids.gov.gh', institution: 'Bank of Ghana' },
    { role: 'Security Analyst', email: 'analyst@gcb.com.gh', institution: 'GCB Bank' },
    { role: 'Incident Responder', email: 'security@mtn.com.gh', institution: 'MTN Ghana' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-yellow-400 mr-3" />
            <div>
              <h1 className="text-3xl font-bold text-white">CIDS Ghana</h1>
              <p className="text-blue-200">Financial Security Operations</p>
            </div>
          </div>
          <p className="text-blue-100">
            Context-Aware Intrusion Detection & Response System
          </p>
        </div>

        {/* Login Form */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-blue-600" />
              Secure Access
            </CardTitle>
            <CardDescription>
              Sign in to access the cybersecurity operations center
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-sm">Demo Access Credentials</CardTitle>
            <CardDescription className="text-xs">
              Use any email/password combination to access the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {demoCredentials.map((cred, index) => (
                <div 
                  key={index}
                  className="text-xs p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => setEmail(cred.email)}
                >
                  <div className="font-medium text-blue-600">{cred.role}</div>
                  <div className="text-gray-600">{cred.email}</div>
                  <div className="text-gray-500">{cred.institution}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-500 border-t pt-3">
              <strong>Note:</strong> This is a demonstration system. Use any password to log in.
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-blue-100 text-xs">
            Protected by multi-layer security protocols<br />
            Authorized personnel only • All activities monitored
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
