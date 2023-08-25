import sys


def generate_alternate_ending(story_name, user_prompt):
    # Replace this with your actual AI model interaction
    original_ending = "Original ending for " + story_name
    alternate_ending = "AI-generated alternate ending based on: " + user_prompt
    return original_ending, alternate_ending


if __name__ == "__main__":
    story_name = sys.argv[1]
    user_prompt = sys.argv[2]
    original, alternate = generate_alternate_ending(story_name, user_prompt)
    print(original + "|||" + alternate)
