import { BlogPostLayout } from "@/components/BlogPostLayout";

const VegFriendlyDishesEurope = () => {
  return (
    <BlogPostLayout
      title="5 veg-friendly dishes in Europe"
      subtitle="Delicious vegetarian options across European countries"
      category="Food"
      readTime="4 min read"
      publishedDate="January 12, 2026"
      relatedArticles={[
        {
          title: "Fun group games for buses",
          category: "Fun",
          readTime: "3 min read",
          slug: "/learn/fun-group-games-buses"
        },
        {
          title: "Packing light for 10-day tours",
          category: "Tips",
          readTime: "7 min read",
          slug: "/learn/packing-light-10-day-tours"
        }
      ]}
    >
      <div className="space-y-8">
        <p className="text-xl text-muted-foreground leading-relaxed">
          European cuisine offers incredible vegetarian options that go beyond just salads and pasta. From Mediterranean flavors to hearty Central European dishes, you'll discover that eating vegetarian in Europe can be both delicious and satisfying.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🍕 1. Margherita Pizza (Italy)</h2>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="flex-1">
            <p className="mb-4">
              The classic Margherita pizza is a vegetarian's dream! Made with fresh tomato sauce, mozzarella cheese, basil, and olive oil, this Neapolitan specialty is simple yet incredibly flavorful.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Where to find it:</h4>
              <ul className="text-sm space-y-1">
                <li>• Authentic pizzerias in Naples and Rome</li>
                <li>• Most Italian restaurants across Europe</li>
                <li>• Ask for "Margherita senza formaggio" for vegan version</li>
              </ul>
            </div>
          </div>
          <div className="md:w-64">
            <div className="bg-secondary/30 p-4 rounded-lg text-center">
              <p className="text-2xl mb-2">🇮🇹</p>
              <p className="font-medium">Italy</p>
              <p className="text-sm text-muted-foreground">€8-12</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🥘 2. Ratatouille (France)</h2>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="md:w-64 order-2 md:order-1">
            <div className="bg-secondary/30 p-4 rounded-lg text-center">
              <p className="text-2xl mb-2">🇫🇷</p>
              <p className="font-medium">France</p>
              <p className="text-sm text-muted-foreground">€10-15</p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <p className="mb-4">
              This Provençal vegetable stew features eggplant, zucchini, bell peppers, tomatoes, and herbs. It's a celebration of summer vegetables cooked to perfection in olive oil.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Pro tip:</h4>
              <p className="text-sm">Try it in Provence where the vegetables are at their freshest. Many restaurants serve it with crusty bread for soaking up the delicious sauce.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🥔 3. Pierogi (Poland)</h2>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="flex-1">
            <p className="mb-4">
              Polish pierogi are dumplings filled with potatoes, cheese, mushrooms, or sauerkraut. These comforting parcels are boiled and sometimes pan-fried, making them crispy on the outside and soft inside.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Vegetarian fillings:</h4>
              <ul className="text-sm space-y-1">
                <li>• Potato and cheese (ruskie)</li>
                <li>• Sauerkraut (kapusta)</li>
                <li>• Potato and mushroom</li>
                <li>• Cheese and potato with herbs</li>
              </ul>
            </div>
          </div>
          <div className="md:w-64">
            <div className="bg-secondary/30 p-4 rounded-lg text-center">
              <p className="text-2xl mb-2">🇵🇱</p>
              <p className="font-medium">Poland</p>
              <p className="text-sm text-muted-foreground">€4-8</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🥙 4. Falafel Wrap (Multiple Countries)</h2>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="md:w-64 order-2 md:order-1">
            <div className="bg-secondary/30 p-4 rounded-lg text-center">
              <p className="text-2xl mb-2">🌍</p>
              <p className="font-medium">Multiple</p>
              <p className="text-sm text-muted-foreground">€5-10</p>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <p className="mb-4">
              Crispy falafel balls made from chickpeas, herbs, and spices, wrapped in pita bread with tahini sauce, tomatoes, and pickled vegetables. A Middle Eastern favorite that's become popular across Europe.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Where to find great falafel:</h4>
              <ul className="text-sm space-y-1">
                <li>• Amsterdam's Middle Eastern restaurants</li>
                <li>• Berlin's street food scene</li>
                <li>• Mediterranean eateries across Europe</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🍲 5. Gazpacho (Spain)</h2>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div className="flex-1">
            <p className="mb-4">
              This refreshing cold soup from Andalusia is made with tomatoes, cucumbers, bell peppers, garlic, olive oil, and bread. It's perfect for hot summer days and incredibly healthy.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Seasonal note:</h4>
              <p className="text-sm">Best during summer when tomatoes are at their peak. Many restaurants serve it with toppings like diced vegetables or croutons.</p>
            </div>
          </div>
          <div className="md:w-64">
            <div className="bg-secondary/30 p-4 rounded-lg text-center">
              <p className="text-2xl mb-2">🇪🇸</p>
              <p className="font-medium">Spain</p>
              <p className="text-sm text-muted-foreground">€6-12</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">🌱 Vegetarian Travel Tips for Europe</h2>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-800 mb-3">Language Essentials</h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li><strong>Italian:</strong> "Sono vegetariano" (I am vegetarian)</li>
              <li><strong>French:</strong> "Je suis végétarien" (I am vegetarian)</li>
              <li><strong>Spanish:</strong> "Soy vegetariano" (I am vegetarian)</li>
              <li><strong>German:</strong> "Ich bin Vegetarier" (I am vegetarian)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">Finding Vegetarian Food</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Look for "vegetarisch" in German-speaking countries</li>
              <li>• "Végétarien" signs in France and Belgium</li>
              <li>• Indian restaurants often have great vegetarian options</li>
              <li>• Mediterranean cuisine is naturally vegetarian-friendly</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg my-8">
          <h3 className="font-bold text-primary mb-3">🍽️ European Vegetarian Paradise</h3>
          <p className="mb-4">Europe offers incredible vegetarian cuisine that proves plant-based eating can be both delicious and satisfying. From Italian pizzas to Spanish cold soups, you'll never feel deprived of good food.</p>
          <p className="text-sm text-muted-foreground">
            Remember: When in doubt, point to menu items or use translation apps. Most Europeans are happy to help you find vegetarian options!
          </p>
        </div>

        <p className="text-center italic text-muted-foreground mt-8">
          "One cannot think well, love well, sleep well, if one has not dined well." - Virginia Woolf
        </p>
      </div>
    </BlogPostLayout>
  );
};

export default VegFriendlyDishesEurope;
