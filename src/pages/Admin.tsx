import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Plus, LogOut } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "@/components/admin/ProductList";
import ProductForm from "@/components/admin/ProductForm";

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("trending");
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    if (!session?.user) {
      navigate("/auth");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleEdit = (product: any) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-secondary">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/")} variant="outline">
              View Site
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showForm ? (
          <div className="max-w-2xl mx-auto">
            <Button
              variant="ghost"
              onClick={handleFormClose}
              className="mb-4"
            >
              ← Back to Products
            </Button>
            <ProductForm
              section={activeTab as any}
              product={editingProduct}
              onSuccess={handleFormClose}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Manage your products organized by section
              </p>
              <Button onClick={() => setShowForm(true)}>
                <Plus size={16} className="mr-2" />
                Add Product
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="new_arrivals">New Arrivals</TabsTrigger>
                <TabsTrigger value="best_sellers">Best Sellers</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
              </TabsList>

              <TabsContent value="trending">
                <ProductList section="trending" onEdit={handleEdit} />
              </TabsContent>

              <TabsContent value="new_arrivals">
                <ProductList section="new_arrivals" onEdit={handleEdit} />
              </TabsContent>

              <TabsContent value="best_sellers">
                <ProductList section="best_sellers" onEdit={handleEdit} />
              </TabsContent>

              <TabsContent value="collections">
                <ProductList section="collections" onEdit={handleEdit} />
              </TabsContent>
            </Tabs>
          </>
        )}
      </main>
    </div>
  );
};

export default Admin;
