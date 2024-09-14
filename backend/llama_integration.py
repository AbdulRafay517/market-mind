import ollama

def process_query(query: str, data: dict) -> str:
    # Construct the prompt
    prompt = f"Based on the following data: {data}, answer this query: {query}"
    
    # Call the Ollama model
    response = ollama.generate(model='llama2', prompt=prompt)
    
    # Extract and return the generated text
    return response['response']

# Optional: Function to list available models
def list_available_models():
    models = ollama.list()
    return [model['name'] for model in models['models']]
