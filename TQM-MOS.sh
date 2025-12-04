#!/bin/sh

echo "Vui lòng đợi"
echo "Đang tạo Packages...."
apt-ftparchive packages ./TQM > ./Packages;
#sed -i -e '/^SHA/d' ./Packages;
bzip2 -c9k ./Packages > ./Packages.bz2;
echo "Vui lòng đợi"
echo "Đang tạo Release...."
printf "Origin: TQM - Mos  ™\nLabel: TQM - Mos  ™\nSuite: stable\nVersion: 1.0\nCodename: ios\nArchitectures: iphoneos-arm iphoneos-arm64 iphoneos-arm64e\nComponents: main\nDescription: Kho Lưu Trữu Tinh Chỉnh Tốt Nhất 🤩\nMD5Sum:\n "$(cat ./Packages | md5sum | cut -d ' ' -f 1)" "$(stat ./Packages --printf="%s")" Packages\n "$(cat ./Packages.bz2 | md5sum | cut -d ' ' -f 1)" "$(stat ./Packages.bz2 --printf="%s")" Packages.bz2\n" >Release;

echo "Vui lòng đợi"
echo "Xong !"
exit 0;