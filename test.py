import cv2

x1, y1, x2, y2 = 100, 100, 800, 800


cv2.namedWindow("preview")
vc = cv2.VideoCapture(0)

if vc.isOpened():
    rval, frame = vc.read()
else:
    rval = False

while rval:
    frame = cv2.flip(frame, 1)

    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 128, 0), 2)

    cv2.imshow("Gesture Recognition System for Deaf", frame)
    rval, frame = vc.read()
    key = cv2.waitKey(20)
    if key == 27:  # exit on ESC
        break
cv2.destroyWindow("Finger")
