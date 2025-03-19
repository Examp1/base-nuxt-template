export default defineEventHandler((event) => {
    // Получаем параметр `slug` из запроса
    const { slug } = getQuery(event);
  
    if (slug === '/') {
      return {
        constructor: [
          { id: 1, name: "Constructor 1", type: "Type A" },
          { id: 2, name: "Constructor 2", type: "Type B" },
        ],
        model: [
          { id: 1, name: "Model 1", category: "Category X" },
          { id: 2, name: "Model 2", category: "Category Y" },
        ],
      };
    }
  
    throw createError({
      statusCode: 404,
      statusMessage: "Invalid slug",
    });
  });
  