from typing import List
import os
import yaml


def read_class_names_from_yaml() -> List[str]:
    with open("./archive/data.yaml", "r") as yaml_file:
        data = yaml.safe_load(yaml_file)
        return data['names']


class_names = read_class_names_from_yaml()


def read_images_with_labels(directory: str, limit: int = 200) -> List[dict]:
    images = []
    count = 0
    print(directory)
    for filename in os.listdir(os.path.join(directory, "images")):
        if count >= limit:
            break
        if filename.endswith(".jpg") or filename.endswith(".png"):
            image_data = {"filename": filename, "classes": [], "polygons": []}
            with open(os.path.join(directory, "labels", filename[:-4] + ".txt"), "r") as label_file:
                for line in label_file:
                    parts = line.strip().split()
                    class_index = int(parts[0])
                    class_name = class_names[class_index]
                    if class_name not in image_data["classes"]:
                        image_data["classes"].append(class_name)
                    vertices = [(float(parts[i]), float(parts[i+1])) for i in range(1, len(parts), 2)]
                    image_data["polygons"].append({"class": class_name, "vertices": vertices})
            images.append(image_data)
            count += 1
    return images


def combine_images_with_labels(list1, list2):
    return list1 + list2
