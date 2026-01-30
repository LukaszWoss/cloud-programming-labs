# S3_PIPE_03

def normalize(text):
    # strip -> lower -> remove double spaces
    return " ".join(text.strip().lower().split())

print(normalize("  Ala   Ma   KOTA  "))