from groq import Groq

client = Groq()

def process_query(query: str, data: dict) -> str:
    # Construct the prompt with the provided data and query
    prompt = f"""{query}"""
    
    try:
        completion = client.chat.completions.create(
            model="llama3-70b-8192",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
        )
        
        return completion.choices[0].message.content
    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        print(error_message)
        return error_message

# Optional: Function to list available models (not applicable for Groq)
# def list_available_models():
#     return ["llama3-70b-8192"]  # You can add more models if Groq supports them