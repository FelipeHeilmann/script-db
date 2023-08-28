import fs from 'fs'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function processCSV(filePath) {
    try {
        const csvData = fs.readFileSync(filePath, 'utf-8');
        const lines = csvData.split('\n');

        for (const line of lines) {
            const [id, name, description, minPoints, imageUrl] = line.split(';').map(value => value.trim());
            if (id && name && description && minPoints && imageUrl) {
                await prisma.testament.create({
                    data: {
                        id: parseInt(id),
                        name: name.replace(/"/g, ''), // Remove as aspas do valor
                        description: description.replace(/"/g, ''), // Remove as aspas do valor
                        min_points: parseInt(minPoints), // Converte para número
                        image_url: imageUrl
                    }
                });
                console.log(`Query executed for ${name}`);
            } else {
                console.log('Incomplete data in line:', line);
            }
        }

        console.log('All queries executed.');
    } catch (error) {
        console.error('Error:', error);
    }
}

const csvFilePath = './level-data.csv'
processCSV(csvFilePath)